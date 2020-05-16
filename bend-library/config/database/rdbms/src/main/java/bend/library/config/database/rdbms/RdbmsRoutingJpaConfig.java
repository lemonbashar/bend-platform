package bend.library.config.database.rdbms;

import bend.framework.base.lang.ArrayUtil;
import bend.framework.properties.springproperties.SpringProperties;
import bend.framework.properties.springproperties.database.Database;
import bend.library.config.database.RoutingDataSource;
import bend.library.config.migration.ClusterDatabaseMigration;
import bend.library.config.security.registry.ClusterDatabaseRegistry;
import bend.library.config.service.EncoderService;
import bend.library.constant.BaseConstants;
import bend.library.domain.cluster.entity.DatabaseConfig;
import bend.library.domain.cluster.entity.JpaProperties;
import bend.library.domain.cluster.entity.MigrationConfig;
import bend.library.domain.cluster.enumeretion.DatabasePropertyType;
import bend.library.domain.cluster.repositories.JpaPropertiesRepository;
import bend.library.domain.cluster.service.DatabaseConfigService;
import com.zaxxer.hikari.HikariDataSource;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.context.annotation.Import;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.SharedCacheMode;
import javax.sql.DataSource;
import java.util.*;
import java.util.stream.Collectors;

@Log4j2
@Import(SpringProperties.class)
@EnableTransactionManagement
@Configuration
@DependsOn("rdbmsJpaConfig")
public class RdbmsRoutingJpaConfig {
    private static final String JPA_PROPS_ANNOTATED_PACKAGE = "annotatedPackages";
    private static final String HIBERNATE_PROPS_SHOW_SQL = "hibernate.show_sql";
    private static final String HIBERNATE_PROPS_DIALECT = "hibernate.dialect";
    private static final String HIBERNATE_PROPS_DATABASE_TYPE = "databaseType";
    private final EncoderService encoderService;
    private final ClusterDatabaseMigration databaseMigration;
    private final DatabaseConfigService databaseConfigService;
    private final ClusterDatabaseRegistry clusterDatabaseRegistry;
    private final JpaPropertiesRepository jpaPropertiesRepository;
    private final SpringProperties properties;

    public RdbmsRoutingJpaConfig(EncoderService encoderService, @Autowired(required = false) ClusterDatabaseMigration databaseMigration, DatabaseConfigService databaseConfigService, @Autowired(required = false) ClusterDatabaseRegistry clusterDatabaseRegistry, JpaPropertiesRepository jpaPropertiesRepository, SpringProperties properties) {
        this.encoderService = encoderService;
        this.databaseMigration = databaseMigration;
        this.databaseConfigService = databaseConfigService;
        this.clusterDatabaseRegistry = clusterDatabaseRegistry;
        this.jpaPropertiesRepository = jpaPropertiesRepository;
        this.properties = properties;
    }

    @Bean(name = BaseConstants.ROUTING_DATASOURCE_NAME)
    public DataSource routingDataSource() {
        RoutingDataSource routingDataSource = new RoutingDataSource(this.clusterDatabaseRegistry);
        Pack pack = findDataSources();
        routingDataSource.setTargetDataSources(pack.dataSourceMap);
        routingDataSource.setDefaultTargetDataSource(pack.dataSourceMap.get(clusterDatabaseRegistry.defaultDataSourceKey()));

        /*else { *//*TODO: Will Use Routing database for internationalization support in back-end.: See Future Goal*//*
            DatabaseConfig  databaseConfig = databaseConfigRepository.findBySchema(properties.getDatabase().getRoutingDatabase().getSingleRouteSchema())
                    .orElseThrow(()->new RuntimeException("Can't find Single-Route Schema"));
            routingDataSource = configHikariDataSource(databaseConfig);
            Map<MigrationConfig, List<DataSource>> map = new HashMap<>();
            map.put(databaseConfig.getMigrationConfig(), List.of(routingDataSource));
            pack = new Pack(null, map);
        }*/

        if (databaseMigration != null) {
            log.info("Migration profile(Liquibase/Flyway) is active, and starting migration...");
            pack.dataSourceMigrationMap.forEach(this.databaseMigration::migrate);
        } else
            log.info("Migration profile(Liquibase/Flyway) is not active. Cant not started migration");
        return routingDataSource;
    }

    @Bean(name = BaseConstants.ROUTING_TRANSACTION_NAME)
    public PlatformTransactionManager platformTransactionManager(@Qualifier(BaseConstants.ROUTING_ENTITY_MANAGER_NAME) LocalContainerEntityManagerFactoryBean entityManagerFactoryBean) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactoryBean.getObject());
        return transactionManager;
    }

    @Bean(name = BaseConstants.ROUTING_ENTITY_MANAGER_NAME)
    public LocalContainerEntityManagerFactoryBean localContainerEntityManager(@Qualifier(BaseConstants.ROUTING_DATASOURCE_NAME) DataSource dataSource, @Qualifier(BaseConstants.ROUTING_JPA_VENDOR_ADAPTER) JpaVendorAdapter jpaVendorAdapter) {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(dataSource);
        if(!properties.getDatabase().getRoutingDatabase().isActiveAllRoute() && ArrayUtil.hasData(properties.getDatabase().getRoutingDatabase().getAnnotatedPackages()))
            em.setPackagesToScan(properties.getDatabase().getRoutingDatabase().getAnnotatedPackages());
        else this.jpaPropertiesRepository.findByPropertyKeyAndActiveIsTrue(JPA_PROPS_ANNOTATED_PACKAGE).ifPresent(prop -> em.setPackagesToScan(prop.getPropertyValue().split(":")));
        em.setJpaVendorAdapter(jpaVendorAdapter);
        em.setPersistenceUnitName(BaseConstants.ROUTING_JPA_UNIT);
        em.setSharedCacheMode(SharedCacheMode.ALL);
        em.setJpaProperties(hibernateProperties());
        Map<String, Object> map = new HashMap<>();
        em.setJpaPropertyMap(map);
        return em;
    }

    private Properties hibernateProperties() {
        final Properties properties = new Properties();
        this.jpaPropertiesRepository.findAllByPropertyTypeAndActiveIsTrue(DatabasePropertyType.HIBERNATE)
                .forEach(prop -> properties.put(prop.getPropertyKey(), prop.getPropertyValue()));
        return properties;
    }

    @Bean(name = BaseConstants.ROUTING_JPA_VENDOR_ADAPTER)
    public JpaVendorAdapter jpaVendorAdapter() {
        HibernateJpaVendorAdapter adapter = new HibernateJpaVendorAdapter();
        this.jpaPropertiesRepository.findByPropertyKeyAndActiveIsTrue(HIBERNATE_PROPS_SHOW_SQL).ifPresent(prop -> {
            adapter.setShowSql(Boolean.parseBoolean(prop.getPropertyValue()));
            adapter.setGenerateDdl(Boolean.parseBoolean(prop.getPropertyValue()));
        });
        this.jpaPropertiesRepository.findByPropertyKeyAndActiveIsTrue(HIBERNATE_PROPS_DIALECT).ifPresent(prop -> adapter.setDatabasePlatform(prop.getPropertyValue()));
        Optional<JpaProperties> jpaPropertiesOptional = this.jpaPropertiesRepository.findByPropertyKeyAndActiveIsTrue(HIBERNATE_PROPS_DATABASE_TYPE);
        if (jpaPropertiesOptional.isEmpty()) {
            throw new RuntimeException("You Must Specify The DatabaseType");
        }
        jpaPropertiesOptional.ifPresent(prop -> adapter.setDatabase(org.springframework.orm.jpa.vendor.Database.valueOf(prop.getPropertyValue())));
        return adapter;
    }

    private Pack findDataSources() {
        final Map<Object, Object> dataSourceMap = new HashMap<>();
        final Map<MigrationConfig, List<DataSource>> migrationConfigListMap = new HashMap<>();
        List<DatabaseConfig> databaseConfigs = properties.getDatabase().getRoutingDatabase().isActiveAllRoute() ? this.databaseConfigService.findAllDatabases() : this.databaseConfigService.findAllDatabaseConfigAccordingToKeys(properties.getDatabase().getRoutingDatabase().getSelectedRouteSchemaKeys());
        databaseConfigs.forEach(databaseConfig -> {
            final DataSource dataSource = configHikariDataSource(databaseConfig);
            dataSourceMap.put(databaseConfig.getIdentifiedKey(), dataSource);
            migrationConfigListMap.computeIfAbsent(databaseConfig.getMigrationConfig(), k -> new ArrayList<>());
            migrationConfigListMap.get(databaseConfig.getMigrationConfig()).add(dataSource);
        });
        return new Pack(dataSourceMap, migrationConfigListMap);
    }

    private DataSource configHikariDataSource(DatabaseConfig databaseConfig) {
        HikariDataSource hikariDataSource = new HikariDataSource();
        final Set<JpaProperties> jpaProperties = databaseConfig.getDatabaseProperties().stream().filter(jpaProps -> jpaProps.getPropertyType().equals(DatabasePropertyType.NATIVE)).collect(Collectors.toSet());

        hikariDataSource.setUsername(databaseConfig.getUsername());
        hikariDataSource.setPassword(encoderService.decode(databaseConfig.getPassword()));
        final String jdbcUrl = Database.jdbcUrl(databaseConfig.getSchema(), databaseConfig.getDatabaseType(), databaseConfig.getHost());
        hikariDataSource.setJdbcUrl(jdbcUrl);
        jpaProperties.stream().filter(prop -> prop.getPropertyKey().equals("driver") && prop.isActive()).findFirst().ifPresent(jpaProp -> hikariDataSource.setDriverClassName(jpaProp.getPropertyValue()));
        jpaProperties.stream().filter(prop -> prop.getPropertyKey().equals("connectionTimeout") && prop.isActive()).findFirst().ifPresent(jpaProp -> hikariDataSource.setConnectionTimeout(Long.parseLong(jpaProp.getPropertyValue())));
        jpaProperties.stream().filter(prop -> prop.getPropertyKey().equals("minIdleConnectionSize") && prop.isActive()).findFirst().ifPresent(jpaProp -> hikariDataSource.setMinimumIdle(Integer.parseInt(jpaProp.getPropertyValue())));
        jpaProperties.stream().filter(prop -> prop.getPropertyKey().equals("maxPoolSize") && prop.isActive()).findFirst().ifPresent(jpaProp -> hikariDataSource.setMaximumPoolSize(Integer.parseInt(jpaProp.getPropertyValue())));
        jpaProperties.stream().filter(prop -> prop.getPropertyKey().equals("idleTimeout") && prop.isActive()).findFirst().ifPresent(jpaProp -> hikariDataSource.setIdleTimeout(Long.parseLong(jpaProp.getPropertyValue())));
        jpaProperties.stream().filter(prop -> prop.getPropertyKey().equals("autoCommit") && prop.isActive()).findFirst().ifPresent(jpaProp -> hikariDataSource.setAutoCommit(Boolean.parseBoolean(jpaProp.getPropertyValue())));
        jpaProperties.stream().filter(prop -> prop.getPropertyKey().equals("datasourcePoolName") && prop.isActive()).findFirst().ifPresent(jpaProp -> hikariDataSource.setPoolName(jpaProp.getPropertyValue()));

        log.info("A Datasource connection pool for: " + jdbcUrl + " has been created");
        return hikariDataSource;
    }

    private static class Pack {
        public Map<Object, Object> dataSourceMap;
        public Map<MigrationConfig, List<DataSource>> dataSourceMigrationMap;

        public Pack(Map<Object, Object> dataSourceMap, Map<MigrationConfig, List<DataSource>> dataSourceMigrationMap) {
            this.dataSourceMap = dataSourceMap;
            this.dataSourceMigrationMap = dataSourceMigrationMap;
        }
    }

}
