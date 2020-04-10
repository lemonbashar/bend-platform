package bend.library.config.migration.liquibase;

import bend.framework.properties.springproperties.SpringProperties;
import bend.framework.properties.springproperties.database.migration.Migration;
import bend.library.config.migration.DatabaseMigration;
import bend.library.constant.ProfileConstants;
import lombok.NonNull;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;
import java.sql.Connection;
import java.util.List;

@Log4j2
@Profile(ProfileConstants.LIQUIBASE)
@ConditionalOnProperty(value = "bend-platform.database.migration.active")
@Configuration
public class LiquibaseMigration extends AbstractLiquibaseMigration implements DatabaseMigration {
    public LiquibaseMigration(@NonNull SpringProperties properties) {
        super(properties);
    }

    @Override
    public void migrate(DataSource dataSource) {
        this.migrate(List.of(dataSource));
    }

    @Override
    public void migrate(List<DataSource> dataSources) {
        final Migration migration = properties.getDatabase().getMigration();
        dataSources.forEach(dataSource -> {
            try (final Connection connection = dataSource.getConnection()) {
                runChangelog(connection, migration.getLiquibase().changelogPath(), migration.getLiquibase().getTag(), migration.getLiquibase().getContexts());
                if (migration.getLiquibase().getSecondaryChangelogPaths() != null && migration.getLiquibase().getSecondaryChangelogPaths().length > 0)
                    for (String path : migration.getLiquibase().getSecondaryChangelogPaths())
                        runChangelog(connection, migration.getLiquibase().changelogPath(path), migration.getLiquibase().getTag(), migration.getLiquibase().getContexts());
            } catch (Exception e) {
                log.error(e);
            }
        });
    }
}
