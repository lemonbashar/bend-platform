package bend.library.config.security.registry.impl;

import bend.framework.properties.springproperties.SpringProperties;
import bend.library.config.security.registry.ClusterDatabaseRegistry;
import bend.library.config.security.registry.enumeretion.RegistryDetectionType;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class StandardClusterDatabaseRegistry implements ClusterDatabaseRegistry {
    private final @NonNull SpringProperties properties;
    @Override
    public String findAppropriateDatabase(String value, RegistryDetectionType detectionType) {
        switch (detectionType) {
            case CLUSTER_KEY:
                return value;
            case LOCALE_KEY:
                return properties.getDatabase().getRoutingDatabase().getDefaultSchemaKey() + "-" + value.toLowerCase();
        }
        return value;
    }

    @Override
    public String defaultDataSourceKey() {
        return properties.getDatabase().getRoutingDatabase().getDefaultSchemaKey();
    }
}
