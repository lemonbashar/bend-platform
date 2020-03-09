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
import bend.library.domain.entity.User;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.hibernate.cfg.Environment;
import org.springframework.context.annotation.Import;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Stream;

@Import(SpringProperties.class)
@RequiredArgsConstructor
@Service
public class DatabaseConfigServiceImpl implements DatabaseConfigService {
    private final @NonNull SpringProperties properties;
    private final @NonNull DatabaseConfigRepository databaseConfigRepository;
    private final @NonNull JpaPropertiesRepository jpaPropertiesRepository;
    private final @NonNull EncoderService encoderService;

    @Override
    public void createDatabaseConfig(User actorUser, String... schemas) {
        this.createDatabaseConfig(actorUser, properties.getDatabase(), schemas);
    }

    @Override
    public void createDatabaseConfig(User actorUser, Database database, String... schemas) {
        createDatabaseConfig(actorUser, database.getHost(), database.getDatabaseType(), database.getUsername(), database.getPassword(), database, schemas);
    }

    @Override
    public void createDatabaseConfig(User actorUser, String host, DatabaseType databaseType, String username, String password, Database database, String... schemas) {
        Set<JpaProperties> jpaProperties = new HashSet<>();
        jpaProperties.add(makeNativeProperties(actorUser, "driver", Database::getDriver, database));
        jpaProperties.add(makeNativeProperties(actorUser, "connectionTimeout", Database::getConnectionTimeout, database));
        jpaProperties.add(makeNativeProperties(actorUser, "minIdleConnectionSize", Database::getMinIdleConnectionSize, database));
        jpaProperties.add(makeNativeProperties(actorUser, "maxPoolSize", Database::getMaxPoolSize, database));
        jpaProperties.add(makeNativeProperties(actorUser, "idleTimeout", Database::getIdleTimeout, database));
        jpaProperties.add(makeNativeProperties(actorUser, "autoCommit", Database::isAutoCommit, database));
        jpaProperties.add(makeNativeProperties(actorUser, "datasourcePoolName", Database::getDatasourcePoolName, database));

        jpaProperties.add(makeHibernateProperties(actorUser, Environment.DIALECT, Hibernate::getDialect, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(actorUser, Environment.HBM2DDL_AUTO, Hibernate::getHbm2DDLAuto, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(actorUser, Environment.USE_SQL_COMMENTS, Hibernate::isShowSqlComments, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(actorUser, Environment.SHOW_SQL, Hibernate::isShowSql, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(actorUser, Environment.FORMAT_SQL, Hibernate::isFormatSQL, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(actorUser, Environment.USE_SECOND_LEVEL_CACHE, Hibernate::isEnableSecondLevelCache, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(actorUser, Environment.USE_QUERY_CACHE, Hibernate::isEnableQueryCache, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(actorUser, Environment.AUTO_EVICT_COLLECTION_CACHE, Hibernate::isEnableAutoEvictCollCache, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(actorUser, Environment.USE_STRUCTURED_CACHE, Hibernate::isEnableStructuredCache, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(actorUser, Environment.CACHE_REGION_FACTORY, Hibernate::getSecondLevelCacheRegionFactoryClass, database.getHibernate()));
        jpaProperties.add(makeHibernateProperties(actorUser, "annotatedPackages", Hibernate::getAnnotatedPackages, database.getHibernate()));

        jpaProperties.add(makeJpaProperties(actorUser, "persistentUnit", Jpa::getPersistentUnit, database.getJpa()));
        jpaProperties.add(makeJpaProperties(actorUser, "repositoryLocations", Jpa::getRepositoryLocations, database.getJpa()));
        jpaProperties.add(makeJpaProperties(actorUser, "transactionManagerBeanName", Jpa::getTransactionManagerBeanName, database.getJpa()));
        jpaProperties.add(makeJpaProperties(actorUser, "entityManagerBeanName", Jpa::getEntityManagerBeanName, database.getJpa()));

        createDatabaseConfig(actorUser, host, databaseType, username, password, jpaProperties, schemas);
    }

    private void createDatabaseConfig(User actorUser, String host, DatabaseType databaseType, String username, String password, Set<JpaProperties> jpaProperties, String... schemas) {
        Stream.of(schemas)
                .parallel().forEach(schema -> {
            DatabaseConfig databaseConfig = databaseConfigRepository.findBySchema(schema).orElseGet(() -> new DatabaseConfig(actorUser, null));
            databaseConfig.setHost(host);
            databaseConfig.setSchema(schema);
            if(databaseConfig.getId() != null) {
                databaseConfig.setUpdateBy(actorUser);
                databaseConfig.setUpdateDate(LocalDate.now());
            }
            databaseConfig.setDatabaseType(databaseType);
            databaseConfig.setDatabaseProperties(jpaProperties);
            databaseConfig.setUsername(username);
            databaseConfig.setPassword(encoderService.encode(password));
            databaseConfigRepository.save(databaseConfig);
        });
    }

    private JpaProperties makeNativeProperties(User actorUser, String propertiesKey, Function<Database, Object> databaseProperties, Database database) {
        return jpaPropertiesRepository.findByPropertyKeyAndPropertyValue(propertiesKey, databaseProperties.apply(database).toString())
                .orElseGet(() -> jpaPropertiesRepository.save(new JpaProperties(actorUser, propertiesKey, databaseProperties.apply(database).toString())));
    }

    private JpaProperties makeHibernateProperties(User actorUser, String propertiesKey, Function<Hibernate, Object> databaseProperties, Hibernate hibernate) {
        return jpaPropertiesRepository.findByPropertyKeyAndPropertyValue(propertiesKey, databaseProperties.apply(hibernate).toString())
                .orElseGet(() -> jpaPropertiesRepository.save(new JpaProperties(actorUser, propertiesKey, databaseProperties.apply(hibernate).toString(), DatabasePropertyType.HIBERNATE)));
    }

    private JpaProperties makeJpaProperties(User actorUser, String propertiesKey, Function<Jpa, Object> databaseProperties, Jpa jpa) {
        return jpaPropertiesRepository.findByPropertyKeyAndPropertyValue(propertiesKey, databaseProperties.apply(jpa).toString())
                .orElseGet(() -> jpaPropertiesRepository.save(new JpaProperties(actorUser, propertiesKey, databaseProperties.apply(properties.getDatabase().getJpa()).toString(), DatabasePropertyType.JPA)));
    }
}
