package bend.library.config.migration;

import bend.framework.properties.springproperties.SpringProperties;
import bend.library.config.constants.ProfileConstants;
import liquibase.Contexts;
import liquibase.Liquibase;
import liquibase.database.DatabaseFactory;
import liquibase.database.jvm.JdbcConnection;
import liquibase.exception.DatabaseException;
import liquibase.exception.LiquibaseException;
import liquibase.resource.ResourceAccessor;
import lombok.NonNull;
import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;
import java.sql.Connection;
import java.util.List;
import java.util.stream.Stream;

@Log4j2
@Profile(ProfileConstants.LIQUIBASE)
@Configuration
public class LiquibaseMigration implements DatabaseMigration {
    private final @NonNull SpringProperties properties;
    private ResourceAccessor resourceAccessor;

    private Liquibase liquibase;

    public LiquibaseMigration(@NonNull SpringProperties properties) {
        this.properties = properties;
        if(properties.getDatabase().getMigration().isActive()) {
            log.info("Liquibase Migration is active");
            this.resourceAccessor = new ClasspathResourceAccessor(getClass().getClassLoader(), properties.getDatabase().getMigration().getLiquibase());
        }
        else log.info("Migration is Not Active.");
    }

    @Override
    public void migrate(DataSource dataSource) {
        this.migrate(List.of(dataSource));
    }

    @Override
    public void migrate(List<DataSource> dataSources) {
        final bend.framework.properties.springproperties.database.migration.Liquibase lb = properties.getDatabase().getMigration().getLiquibase();
        dataSources.forEach(dataSource -> {
            try(final Connection connection = dataSource.getConnection()) {
                runChangelog(connection, lb.changelogPath(), lb.getTag(), lb.getContexts());
                if(lb.getSecondaryChangelogPaths() !=null && lb.getSecondaryChangelogPaths().length>0)
                    for(String path: lb.getSecondaryChangelogPaths())
                        runChangelog(connection, lb.changelogPath(path), lb.getTag(), lb.getContexts());
            } catch (Exception e) {
                log.error(e);
            }
        });
    }

    private void runChangelog(final Connection connection, final String changelogPath, final String tag, final String[] contexts) throws LiquibaseException {
        this.liquibase = new Liquibase(changelogPath, this.resourceAccessor, DatabaseFactory.getInstance().findCorrectDatabaseImplementation(new JdbcConnection(connection)));
        if(tag!=null)
            liquibase.update(tag, (contexts==null || contexts.length<1 )?new Contexts():new Contexts(contexts));
        else
            liquibase.update((contexts==null || contexts.length<1 )?new Contexts():new Contexts(contexts));
    }
}
