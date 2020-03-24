package bend.library.domain.cluster.registry.impl;

import bend.library.domain.cluster.entity.DatabaseConfig;
import bend.library.domain.cluster.registry.ClusterDatabaseRegistry;
import bend.library.domain.cluster.repositories.DatabaseConfigRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;

@RequiredArgsConstructor
@Service
public class StaticClusterDatabaseRegistry implements ClusterDatabaseRegistry {
    private static final int INDEX_WHEN_NO_USER_FOUND = 0;
    private final int TOTAL_CLUSTER_DATABASE=3;/*Now We going to use only 3 database*/
    private final String[] DATABASE_REGISTRY = {
            "bend-cluster-database",
            "bend-cluster-database-north",
            "bend-cluster-database-west"
    };

    @Override
    public String findAppropriateDatabase(String username) {
        return Objects.isNull(username) ? DATABASE_REGISTRY[INDEX_WHEN_NO_USER_FOUND] : DATABASE_REGISTRY[username.hashCode()%TOTAL_CLUSTER_DATABASE];
    }
}
