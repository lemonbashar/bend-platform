package bend.library.config.database;

import bend.library.config.security.util.SecurityUtil;
import bend.library.domain.cluster.registry.ClusterDatabaseRegistry;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.datasource.lookup.AbstractRoutingDataSource;

@RequiredArgsConstructor
public class RoutingDataSource extends AbstractRoutingDataSource {
    private final ClusterDatabaseRegistry clusterDatabaseRegistry;

    @Override
    protected Object determineCurrentLookupKey() {
        return determineLookupKey(SecurityUtil.loggedInUsername());
    }

    private Object determineLookupKey(String username) {
        return this.clusterDatabaseRegistry.findAppropriateDatabase(username);
    }
}
