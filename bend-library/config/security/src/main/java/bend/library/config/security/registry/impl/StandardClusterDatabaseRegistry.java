package bend.library.config.security.registry.impl;

import bend.library.config.security.registry.ClusterDatabaseRegistry;
import bend.library.config.security.registry.enumeretion.RegistryDetectionType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class StandardClusterDatabaseRegistry implements ClusterDatabaseRegistry {
    @Override
    public String findAppropriateDatabase(String value, RegistryDetectionType detectionType) {
        switch (detectionType) {
            case CLUSTER_KEY:
                return value;
        }
        return value;
    }

    @Override
    public String defaultDataSourceKey() {
        return "bcd";
    }
}
