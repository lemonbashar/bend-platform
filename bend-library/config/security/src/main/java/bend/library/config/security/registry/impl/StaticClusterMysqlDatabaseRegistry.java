package bend.library.config.security.registry.impl;

import bend.library.config.security.registry.ClusterDatabaseRegistry;
import bend.library.config.security.registry.enumeretion.RegistryDetectionType;
import bend.library.constant.ProfileConstants;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.util.Objects;

@RequiredArgsConstructor
@ConditionalOnProperty("bend-platform.database.routing-database.active-all-route")
@Profile(ProfileConstants.Database.MYSQL)
@Service
public class StaticClusterMysqlDatabaseRegistry implements ClusterDatabaseRegistry {
    private static final int INDEX_WHEN_NO_USER_FOUND = 0;
    private final int TOTAL_CLUSTER_DATABASE = 3;/*Now We going to use only 3 database*/
    private final String[] DATABASE_REGISTRY = {
            "bend_cluster_database",
            "bend_cluster_database_north",
            "bend_cluster_database_west"
    };

    @SuppressWarnings("SwitchStatementWithTooFewBranches")
    @Override
    public String findAppropriateDatabase(@NotNull String value, @NotNull RegistryDetectionType detectionType) {
        switch (detectionType) {
            case BY_USERNAME:
                return Objects.isNull(value) ? DATABASE_REGISTRY[INDEX_WHEN_NO_USER_FOUND] : DATABASE_REGISTRY[Math.abs(value.hashCode()) % TOTAL_CLUSTER_DATABASE];
            default:
                return defaultDataSourceKey();
        }
    }

    @Override
    public String defaultDataSourceKey() {
        return DATABASE_REGISTRY[INDEX_WHEN_NO_USER_FOUND];
    }
}
