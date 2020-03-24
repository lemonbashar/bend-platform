package bend.library.config.migration;

import bend.library.domain.cluster.entity.MigrationConfig;

import javax.sql.DataSource;
import java.util.List;

public interface ClusterDatabaseMigration {
    void migrate(MigrationConfig migrationConfig, List<DataSource> dataSources);
}
