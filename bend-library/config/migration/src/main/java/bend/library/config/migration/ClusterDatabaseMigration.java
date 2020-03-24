package bend.library.config.migration;

import bend.library.domain.cluster.entity.MigrationConfig;

import javax.sql.DataSource;
import java.util.List;

public interface ClusterDatabaseMigration {
    void migrate(List<DataSource> dataSources, MigrationConfig migrationConfig);
}
