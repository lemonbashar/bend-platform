package bend.library.config.security.registry;

import bend.library.config.security.registry.enumeretion.RegistryDetectionType;

public interface ClusterDatabaseRegistry {
    /**
     * Find appropriate cluster database info using username.
     *
     * @param value         value which is used for detecting appropriate database
     * @param detectionType It's the registry detection type, cause we may have several datasource detection type, massively we use {@link RegistryDetectionType#BY_USERNAME} username detection type, where value is the username
     * @return Appropriate database name for current user.
     */
    String findAppropriateDatabase(String value, RegistryDetectionType detectionType);

    String defaultDataSourceKey();
}
