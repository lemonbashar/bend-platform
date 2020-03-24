package bend.library.domain.cluster.registry;

import bend.library.domain.cluster.entity.DatabaseConfig;

public interface ClusterDatabaseRegistry {
    /**
     * Find appropriate cluster database info using username.
     * @param username username which is used for detecting appropriate database
     * @return Appropriate database name for current user.
     */
    String findAppropriateDatabase(String username);

    String defaultDataSourceKey();
}
