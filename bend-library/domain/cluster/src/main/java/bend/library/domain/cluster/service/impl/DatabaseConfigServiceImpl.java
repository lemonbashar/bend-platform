package bend.library.domain.cluster.service.impl;

import bend.framework.properties.springproperties.SpringProperties;
import bend.framework.properties.springproperties.database.Database;
import bend.framework.properties.springproperties.database.DatabaseType;
import bend.framework.properties.springproperties.database.Hibernate;
import bend.framework.properties.springproperties.database.Jpa;
import bend.library.config.service.EncoderService;
import bend.library.domain.cluster.entity.DatabaseConfig;
import bend.library.domain.cluster.entity.JpaProperties;
import bend.library.domain.cluster.enumeretion.DatabasePropertyType;
import bend.library.domain.cluster.repositories.DatabaseConfigRepository;
import bend.library.domain.cluster.repositories.JpaPropertiesRepository;
import bend.library.domain.cluster.service.DatabaseConfigService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.hibernate.cfg.Environment;
import org.springframework.context.annotation.Import;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Stream;

import static bend.library.config.util.DatabaseUtil.makeString;

@Import(SpringProperties.class)
@RequiredArgsConstructor
@Service
public class DatabaseConfigServiceImpl implements DatabaseConfigService {
    private final @NonNull SpringProperties properties;
    private final @NonNull DatabaseConfigRepository databaseConfigRepository;
    private final @NonNull JpaPropertiesRepository jpaPropertiesRepository;
    private final @NonNull EncoderService encoderService;

    @Override
    public void createDatabaseConfig(String... schemas) {
        this.createDatabaseConfig(properties.getDatabase(), schemas);
    }

    @Override
    public void createDatabaseConfig(Database database, String... schemas) {
        createDatabaseConfig(database.getHost(), database.getDatabaseType(), database.getUsername(), database.getPassword(), database, schemas);
    }

    @Override
    public void createDatabaseConfig(String host, DatabaseType databaseType, String username, String password, Database database, String... schemas) {
        Set<JpaProperties> jpaProperties = new HashSet<>();
        jpaProperties.add(makeNativeProperties("driver", Database::getDriver, database));
        jpaProperties.add(makeNativeProperties("connectionTimeout", Database::getConnectionTimeout, database));
        jpaProperties.add(makeNativeProperties("minIdleConnectionSize", Database::getMinIdleConnectionSize, database));
        jpaProperties.add(makeNativeProperties("maxPoolSize", Database::getMaxPoolSize, database));
        jpaProperties.add(makeNativeProperties("idleTimeout", Database::getIdleTimeout, database));
        jpaProperties.add(makeNativeProperties("autoCommit", Database::isAutoCommit, database));
        jpaProperties.add(makeNativeProperties("datasourcePoolName", Database::getDatasourcePoolName, database));

        jpaProperties.add(makeHibernateProperties(Environment.DIALECT, Hibernate::getDialect, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(Environment.HBM2DDL_AUTO, Hibernate::getHbm2DDLAuto, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(Environment.USE_SQL_COMMENTS, Hibernate::isShowSqlComments, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(Environment.SHOW_SQL, Hibernate::isShowSql, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(Environment.FORMAT_SQL, Hibernate::isFormatSQL, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(Environment.USE_SECOND_LEVEL_CACHE, Hibernate::isEnableSecondLevelCache, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(Environment.USE_QUERY_CACHE, Hibernate::isEnableQueryCache, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(Environment.AUTO_EVICT_COLLECTION_CACHE, Hibernate::isEnableAutoEvictCollCache, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(Environment.USE_STRUCTURED_CACHE, Hibernate::isEnableStructuredCache, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(Environment.CACHE_REGION_FACTORY, Hibernate::getSecondLevelCacheRegionFactoryClass, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties("annotatedPackages", Hibernate::getAnnotatedPackages, database.getHibernate()));

        jpaProperties.add(makeJpaProperties("persistentUnit", Jpa::getPersistentUnit, database.getJpa()));
        jpaProperties.add(makeJpaProperties("repositoryLocations", Jpa::getRepositoryLocations, database.getJpa()));
        jpaProperties.add(makeJpaProperties("transactionManagerBeanName", Jpa::getTransactionManagerBeanName, database.getJpa()));
        jpaProperties.add(makeJpaProperties("entityManagerBeanName", Jpa::getEntityManagerBeanName, database.getJpa()));

        createDatabaseConfig(host, databaseType, username, password, jpaProperties, schemas);
    }

    @Override
    public List<DatabaseConfig> findAllDatabases() {
        return databaseConfigRepository.findAllByActiveIsTrue();
    }

    @Override
    public List<DatabaseConfig> findAllDatabaseConfigAccordingToKeys(String[] keys) {
        return databaseConfigRepository.findAllByKeysAndActiveIsTrue(keys);
    }

    private void createDatabaseConfig(String host, DatabaseType databaseType, String username, String password, Set<JpaProperties> jpaProperties, String... schemas) {
        Stream.of(schemas)
                .parallel().forEach(schema -> {
            DatabaseConfig databaseConfig = databaseConfigRepository.findBySchema(schema).orElseGet(DatabaseConfig::new);
            databaseConfig.setHost(host);
            databaseConfig.setSchema(schema);
            if (databaseConfig.getId() != null)
                databaseConfig.setUpdateDate(LocalDate.now());
            databaseConfig.setDatabaseType(databaseType);
            databaseConfig.setDatabaseProperties(jpaProperties);
            databaseConfig.setUsername(username);
            databaseConfig.setPassword(encoderService.encode(password));
            databaseConfigRepository.save(databaseConfig);
        });
    }

    private JpaProperties makeNativeProperties(String propertiesKey, Function<Database, Object> databaseProperties, Database database) {
        return jpaPropertiesRepository.findByPropertyKeyAndPropertyValueAndActive(propertiesKey, makeString(databaseProperties.apply(database)), true)
                .orElseGet(() -> jpaPropertiesRepository.save(new JpaProperties(propertiesKey, makeString(databaseProperties.apply(database)), DatabasePropertyType.NATIVE)));
    }

    private JpaProperties makeHibernateProperties(String propertiesKey, Function<Hibernate, Object> databaseProperties, Hibernate hibernate) {
        return jpaPropertiesRepository.findByPropertyKeyAndPropertyValueAndActive(propertiesKey, makeString(databaseProperties.apply(hibernate)), true)
                .orElseGet(() -> jpaPropertiesRepository.save(new JpaProperties(propertiesKey, makeString(databaseProperties.apply(hibernate)), DatabasePropertyType.HIBERNATE)));
    }

    private JpaProperties makeJpaProperties(String propertiesKey, Function<Jpa, Object> databaseProperties, Jpa jpa) {
        return jpaPropertiesRepository.findByPropertyKeyAndPropertyValueAndActive(propertiesKey, makeString(databaseProperties.apply(jpa)), true)
                .orElseGet(() -> jpaPropertiesRepository.save(new JpaProperties(propertiesKey, makeString(databaseProperties.apply(properties.getDatabase().getJpa())), DatabasePropertyType.JPA)));
    }
}
