package bend.library.config.database.rdbms;

import bend.framework.base.util.BendOptional;
import bend.framework.properties.springproperties.SpringProperties;
import bend.framework.properties.springproperties.database.Database;
import bend.library.config.constants.BaseConstants;
import bend.library.config.database.RoutingDataSource;
import bend.library.config.migration.ClusterDatabaseMigration;
import bend.library.config.migration.DatabaseMigration;
import bend.library.config.service.EncoderService;
import bend.library.domain.cluster.entity.DatabaseConfig;
import bend.library.domain.cluster.entity.JpaProperties;
import bend.library.domain.cluster.entity.MigrationConfig;
import bend.library.domain.cluster.enumeretion.DatabasePropertyType;
import bend.library.domain.cluster.registry.ClusterDatabaseRegistry;
import bend.library.domain.cluster.repositories.DatabaseConfigRepository;
import bend.library.domain.cluster.repositories.JpaPropertiesRepository;
import com.zaxxer.hikari.HikariDataSource;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.*;
import java.util.function.Consumer;
import java.util.stream.Collectors;

@Log4j2
@RequiredArgsConstructor
@Import(SpringProperties.class)
@Configuration
@DependsOn("rdbmsJpaConfig")
public class RdbmsRoutingJpaConfig {
    private final @NonNull EncoderService encoderService;
    private final @NonNull ClusterDatabaseMigration databaseMigration;
    private final @NonNull DatabaseConfigRepository databaseConfigRepository;
    private final @NonNull ClusterDatabaseRegistry clusterDatabaseRegistry;

    @Bean(name=BaseConstants.ROUTING_DATASOURCE_NAME)
    public DataSource routingDataSource() {
        RoutingDataSource routingDataSource = new RoutingDataSource(this.clusterDatabaseRegistry);
        final Pack pack = findDataSources();
        routingDataSource.setTargetDataSources(pack.dataSourceMap);
        routingDataSource.setDefaultTargetDataSource(pack.dataSourceMap.get(clusterDatabaseRegistry.defaultDataSourceKey()));
        if(databaseMigration!=null) {
            log.info("Migration profile(Liquibase/Flyway) is active, and starting migration...");
            pack.dataSourceMigrationMap.forEach(this.databaseMigration::migrate);
        }
        else
            log.info("Migration profile(Liquibase/Flyway) is not active. Cant not started migration");

        return routingDataSource;
    }

    private Pack findDataSources() {
        final Map<Object, Object> dataSourceMap = new HashMap<>();
        final Map<MigrationConfig, List<DataSource>> migrationConfigListMap = new HashMap<>();
        this.databaseConfigRepository.findAllByActiveIsTrue()
                .forEach(databaseConfig -> {
                    final DataSource dataSource = configHikariDataSource(databaseConfig);
                    dataSourceMap.put(databaseConfig.getSchema(), dataSource);
                    migrationConfigListMap.computeIfAbsent(databaseConfig.getMigrationConfig(), k -> new ArrayList<>());
                    migrationConfigListMap.get(databaseConfig.getMigrationConfig()).add(dataSource);
                });
        return new Pack(dataSourceMap, migrationConfigListMap);
    }

    private DataSource configHikariDataSource(DatabaseConfig databaseConfig) {
        HikariDataSource hikariDataSource = new HikariDataSource();
        final Set<JpaProperties> jpaProperties = databaseConfig.getDatabaseProperties().stream().filter(jpaProps->jpaProps.getPropertyType().equals(DatabasePropertyType.NATIVE)).collect(Collectors.toSet());

        hikariDataSource.setUsername(databaseConfig.getUsername());
        hikariDataSource.setPassword(encoderService.decode(databaseConfig.getPassword()));
        final String jdbcUrl = Database.jdbcUrl(databaseConfig.getSchema(), databaseConfig.getDatabaseType(),databaseConfig.getHost());
        hikariDataSource.setJdbcUrl(jdbcUrl);
        jpaProperties.stream().filter(prop->prop.getPropertyKey().equals("driver") && prop.isActive()).findFirst().ifPresent(jpaProp->hikariDataSource.setDriverClassName(jpaProp.getPropertyValue()));
        jpaProperties.stream().filter(prop->prop.getPropertyKey().equals("connectionTimeout") && prop.isActive()).findFirst().ifPresent(jpaProp->hikariDataSource.setConnectionTimeout(Long.parseLong(jpaProp.getPropertyValue())));
        jpaProperties.stream().filter(prop->prop.getPropertyKey().equals("minIdleConnectionSize") && prop.isActive()).findFirst().ifPresent(jpaProp->hikariDataSource.setMinimumIdle(Integer.parseInt(jpaProp.getPropertyValue())));
        jpaProperties.stream().filter(prop->prop.getPropertyKey().equals("maxPoolSize") && prop.isActive()).findFirst().ifPresent(jpaProp->hikariDataSource.setMaximumPoolSize(Integer.parseInt(jpaProp.getPropertyValue())));
        jpaProperties.stream().filter(prop->prop.getPropertyKey().equals("idleTimeout") && prop.isActive()).findFirst().ifPresent(jpaProp->hikariDataSource.setIdleTimeout(Long.parseLong(jpaProp.getPropertyValue())));
        jpaProperties.stream().filter(prop->prop.getPropertyKey().equals("autoCommit") && prop.isActive()).findFirst().ifPresent(jpaProp->hikariDataSource.setAutoCommit(Boolean.parseBoolean(jpaProp.getPropertyValue())));
        jpaProperties.stream().filter(prop->prop.getPropertyKey().equals("datasourcePoolName") && prop.isActive()).findFirst().ifPresent(jpaProp->hikariDataSource.setPoolName(jpaProp.getPropertyValue()));

        log.info("A Datasource connection pool for: " + jdbcUrl + " has been created");
        return hikariDataSource;
    }

    private class Pack {
        public Map<Object, Object> dataSourceMap;
        public Map<MigrationConfig, List<DataSource>> dataSourceMigrationMap;

        public Pack(Map<Object, Object> dataSourceMap, Map<MigrationConfig, List<DataSource>> dataSourceMigrationMap) {
            this.dataSourceMap = dataSourceMap;
            this.dataSourceMigrationMap = dataSourceMigrationMap;
        }
    }

}
