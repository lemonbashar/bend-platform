package bend.library.config.database.rdbms;

import bend.framework.properties.springproperties.SpringProperties;
import bend.library.config.constants.BaseConstants;
import com.zaxxer.hikari.HikariDataSource;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.hibernate.*;
import org.hibernate.cfg.Environment;
import org.hibernate.type.Type;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.SharedCacheMode;
import javax.sql.DataSource;
import java.io.Serializable;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Properties;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/6/2020
 */

@Log4j2
@Import(SpringProperties.class)
@RequiredArgsConstructor
@EnableTransactionManagement
@Configuration
public class RdbmsJpaConfig {
    private final @NonNull SpringProperties properties;

    @Bean
    public DataSource datasource() {
        HikariDataSource hikariDataSource = new HikariDataSource();
        hikariDataSource.setUsername(properties.getDatabase().getUsername());
        hikariDataSource.setPassword(properties.getDatabase().getPassword());
        hikariDataSource.setJdbcUrl(properties.getDatabase().jdbcUrl());
        hikariDataSource.setDriverClassName(properties.getDatabase().getDriver());
        hikariDataSource.setConnectionTimeout(properties.getDatabase().getConnectionTimeout());
        hikariDataSource.setMinimumIdle(properties.getDatabase().getMinIdleConnectionSize());
        hikariDataSource.setMaximumPoolSize(properties.getDatabase().getMaxPoolSize());
        hikariDataSource.setIdleTimeout(properties.getDatabase().getIdleTimeout());
        hikariDataSource.setAutoCommit(properties.getDatabase().isAutoCommit());
        hikariDataSource.setPoolName(properties.getDatabase().getDatasourcePoolName());
        log.info("A Datasource connection pool for: " + properties.getDatabase().jdbcUrl() + " has been created");
        return hikariDataSource;
    }

    @Bean(name = BaseConstants.BASE_TRANSACTION_NAME)
    public PlatformTransactionManager platformTransactionManager(LocalContainerEntityManagerFactoryBean entityManagerFactoryBean) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactoryBean.getObject());
        return transactionManager;
    }

    @Bean(name = BaseConstants.BASE_ENTITY_MANAGER_NAME)
    public LocalContainerEntityManagerFactoryBean localContainerEntityManager(DataSource dataSource, JpaVendorAdapter jpaVendorAdapter) {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(dataSource);
        em.setPackagesToScan(properties.getDatabase().getHibernate().getAnnotatedPackages());
        em.setJpaVendorAdapter(jpaVendorAdapter);
        em.setPersistenceUnitName(properties.getDatabase().getJpa().getPersistentUnit());
        em.setSharedCacheMode(SharedCacheMode.ALL);
        em.setJpaProperties(hibernateProperties());
        Map<String, Object> map = new HashMap<>();
        //map.put("hibernate.ejb.interceptor", interceptor());
        em.setJpaPropertyMap(map);
        return em;
    }

    /*private Interceptor interceptor() {
        return new EmptyInterceptor() {
            @Override
            public void onDelete(Object entity, Serializable id, Object[] state, String[] propertyNames, Type[] types) {
                super.onDelete(entity, id, state, propertyNames, types);
            }

            @Override
            public boolean onFlushDirty(Object entity, Serializable id, Object[] currentState, Object[] previousState, String[] propertyNames, Type[] types) {
                return super.onFlushDirty(entity, id, currentState, previousState, propertyNames, types);
            }

            @Override
            public boolean onLoad(Object entity, Serializable id, Object[] state, String[] propertyNames, Type[] types) {
                return super.onLoad(entity, id, state, propertyNames, types);
            }

            @Override
            public boolean onSave(Object entity, Serializable id, Object[] state, String[] propertyNames, Type[] types) {
                return super.onSave(entity, id, state, propertyNames, types);
            }

            @Override
            public void postFlush(Iterator entities) {
                super.postFlush(entities);
            }

            @Override
            public void preFlush(Iterator entities) {
                super.preFlush(entities);
            }

            @Override
            public Boolean isTransient(Object entity) {
                return super.isTransient(entity);
            }

            @Override
            public Object instantiate(String entityName, EntityMode entityMode, Serializable id) {
                return super.instantiate(entityName, entityMode, id);
            }

            @Override
            public int[] findDirty(Object entity, Serializable id, Object[] currentState, Object[] previousState, String[] propertyNames, Type[] types) {
                return super.findDirty(entity, id, currentState, previousState, propertyNames, types);
            }

            @Override
            public String getEntityName(Object object) {
                return super.getEntityName(object);
            }

            @Override
            public Object getEntity(String entityName, Serializable id) {
                return super.getEntity(entityName, id);
            }

            @Override
            public void afterTransactionBegin(Transaction tx) {
                super.afterTransactionBegin(tx);
            }

            @Override
            public void afterTransactionCompletion(Transaction tx) {
                super.afterTransactionCompletion(tx);
            }

            @Override
            public void beforeTransactionCompletion(Transaction tx) {
                super.beforeTransactionCompletion(tx);
            }

            @Override
            public String onPrepareStatement(String sql) {
                return super.onPrepareStatement(sql);
            }

            @Override
            public void onCollectionRemove(Object collection, Serializable key) throws CallbackException {
                super.onCollectionRemove(collection, key);
            }

            @Override
            public void onCollectionRecreate(Object collection, Serializable key) throws CallbackException {
                super.onCollectionRecreate(collection, key);
            }

            @Override
            public void onCollectionUpdate(Object collection, Serializable key) throws CallbackException {
                super.onCollectionUpdate(collection, key);
            }
        };
    }*/

    @Bean
    public JpaVendorAdapter jpaVendorAdapter() {
        HibernateJpaVendorAdapter adapter = new HibernateJpaVendorAdapter();
        adapter.setShowSql(properties.getDatabase().getHibernate().isShowSql());
        adapter.setDatabasePlatform(properties.getDatabase().getHibernate().getDialect());
        adapter.setGenerateDdl(properties.getDatabase().getHibernate().isShowSql());
        if (properties.getDatabase().getDatabaseType() == null)
            throw new RuntimeException("You Must Specify The DatabaseType");
        adapter.setDatabase(Database.valueOf(properties.getDatabase().getDatabaseType().name()));
        return adapter;
    }

    private Properties hibernateProperties() {
        Properties hbmProperties = new Properties();
        hbmProperties.setProperty(Environment.DIALECT, properties.getDatabase().getHibernate().getDialect());
        hbmProperties.setProperty(Environment.HBM2DDL_AUTO, properties.getDatabase().getHibernate().getHbm2DDLAuto());
        hbmProperties.setProperty(Environment.USE_SQL_COMMENTS, "" + properties.getDatabase().getHibernate().isShowSqlComments());
        hbmProperties.setProperty(Environment.SHOW_SQL, "" + properties.getDatabase().getHibernate().isShowSql());
        hbmProperties.setProperty(Environment.FORMAT_SQL, "" + properties.getDatabase().getHibernate().isFormatSQL());
        hbmProperties.setProperty(Environment.USE_SECOND_LEVEL_CACHE, "" + properties.getDatabase().getHibernate().isEnableSecondLevelCache());
        hbmProperties.setProperty(Environment.USE_QUERY_CACHE, "" + properties.getDatabase().getHibernate().isEnableQueryCache());
        hbmProperties.setProperty(Environment.AUTO_EVICT_COLLECTION_CACHE, "" + properties.getDatabase().getHibernate().isEnableAutoEvictCollCache());
        hbmProperties.setProperty(Environment.USE_STRUCTURED_CACHE, "" + properties.getDatabase().getHibernate().isEnableStructuredCache());
        if (properties.getDatabase().getHibernate().getSecondLevelCacheRegionFactoryClass() != null)
            hbmProperties.setProperty(Environment.CACHE_REGION_FACTORY, "" + properties.getDatabase().getHibernate().getSecondLevelCacheRegionFactoryClass());
        return hbmProperties;
    }
}
