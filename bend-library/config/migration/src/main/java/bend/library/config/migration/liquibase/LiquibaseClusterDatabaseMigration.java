package bend.library.config.migration.liquibase;

import bend.framework.properties.springproperties.SpringProperties;
import bend.framework.properties.springproperties.database.migration.Migration;
import bend.library.config.migration.ClusterDatabaseMigration;
import bend.library.constant.ProfileConstants;
import bend.library.domain.cluster.entity.MigrationConfig;
import lombok.NonNull;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

@Log4j2
@Profile(ProfileConstants.LIQUIBASE)
@ConditionalOnProperty(value = "bend-platform.database.migration.active")
@Configuration
public class LiquibaseClusterDatabaseMigration extends AbstractLiquibaseMigration implements ClusterDatabaseMigration {
    public LiquibaseClusterDatabaseMigration(@NonNull SpringProperties properties) {
        super(properties);
    }

    @Override
    public void migrate(final MigrationConfig migrationConfig, final List<DataSource> dataSources) {
        final Migration migration = properties.getDatabase().getMigration();
        if (!migration.isActive()) {
            log.info("Database Migration is-not active, Make it active to migrate.");
            return;
        }
        final LiquibaseProperties liquibaseProperties = extractProperties(migrationConfig.getMigrationProperties());
        for (DataSource dataSource : dataSources) {
            try (Connection connection = dataSource.getConnection()) {
                runChangelog(connection, migrationConfig.getMigrationPath(), liquibaseProperties.tag, liquibaseProperties.context.toArray(new String[0]));
            } catch (Exception e) {
                log.error(e);
            }
        }
    }

    private LiquibaseProperties extractProperties(final String properties) {
        if (properties == null || properties.isEmpty() || properties.isBlank()) return new LiquibaseProperties();
        String[] props = properties.split(" ");
        LiquibaseProperties liquibaseProperties = new LiquibaseProperties();
        for (String prop : props) {
            if (!prop.contains(":")) continue;
            String[] kv = prop.split(":");
            if (kv[0].equalsIgnoreCase("tag"))
                liquibaseProperties.tag = kv[1];
            else if (kv[0].equalsIgnoreCase("context"))
                liquibaseProperties.context.add(kv[1]);
        }
        return liquibaseProperties;
    }

    private static class LiquibaseProperties {
        String tag;
        List<String> context;

        public LiquibaseProperties() {
            this.context = new ArrayList<>();
        }
    }
}
