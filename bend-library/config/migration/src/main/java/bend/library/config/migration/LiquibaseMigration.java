package bend.library.config.migration;

import bend.framework.properties.springproperties.SpringProperties;
import bend.framework.properties.springproperties.database.migration.Migration;
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
        final Migration migration = properties.getDatabase().getMigration();
        if(!migration.isActive()) {
            log.info("Database Migration is-not active, Make it active to migrate.");
            return;
        }
        dataSources.forEach(dataSource -> {
            try(final Connection connection = dataSource.getConnection()) {
                runChangelog(connection, migration.getLiquibase().changelogPath(), migration.getLiquibase().getTag(), migration.getLiquibase().getContexts());
                if(migration.getLiquibase().getSecondaryChangelogPaths() !=null && migration.getLiquibase().getSecondaryChangelogPaths().length>0)
                    for(String path: migration.getLiquibase().getSecondaryChangelogPaths())
                        runChangelog(connection, migration.getLiquibase().changelogPath(path), migration.getLiquibase().getTag(), migration.getLiquibase().getContexts());
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
