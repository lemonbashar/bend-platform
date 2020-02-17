package bend.library.config.security.jwt.config.database;

import bend.framework.properties.springproperties.SpringProperties;
import com.zaxxer.hikari.HikariDataSource;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.hibernate.cfg.Environment;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

import javax.sql.DataSource;
import java.util.Properties;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/15/2020
 */

@Log4j2
@RequiredArgsConstructor
//@Configuration
public class JwtTokenStorageConfig {
    private final @NonNull SpringProperties properties;

    //@Bean
    public DataSource datasource() {
        HikariDataSource hikariDataSource = new HikariDataSource();
        hikariDataSource.setUsername(properties.getDatabase().getUsername());
        hikariDataSource.setPassword(properties.getDatabase().getPassword());
        hikariDataSource.setJdbcUrl(properties.getDatabase().getUrl());
        hikariDataSource.setDriverClassName(properties.getDatabase().getDriver());
        hikariDataSource.setConnectionTimeout(properties.getDatabase().getConnectionTimeout());
        hikariDataSource.setMinimumIdle(properties.getDatabase().getMinIdleConnectionSize());
        hikariDataSource.setMaximumPoolSize(properties.getDatabase().getMaxPoolSize());
        hikariDataSource.setIdleTimeout(properties.getDatabase().getIdleTimeout());
        hikariDataSource.setAutoCommit(properties.getDatabase().isAutoCommit());
        hikariDataSource.setPoolName(properties.getDatabase().getDatasourcePoolName());
        log.info("A Datasource connection pool for: "+properties.getDatabase().getUrl()+" has been created");
        return hikariDataSource;
    }

    //@Bean(name = "bendTransactionManager")
    public PlatformTransactionManager platformTransactionManager(LocalContainerEntityManagerFactoryBean entityManagerFactoryBean) {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactoryBean.getObject());
        return transactionManager;
    }

    //@Bean(name = "bendEntityManager")
    public LocalContainerEntityManagerFactoryBean localContainerEntityManager(DataSource dataSource, JpaVendorAdapter jpaVendorAdapter) {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(dataSource);
        em.setPackagesToScan(properties.getDatabase().getHibernate().getAnnotatedPackages());
        em.setJpaVendorAdapter(jpaVendorAdapter);
        em.setJpaProperties(hibernateProperties());
        return em;
    }

    //@Bean
    public JpaVendorAdapter jpaVendorAdapter() {
        HibernateJpaVendorAdapter adapter = new HibernateJpaVendorAdapter();
        adapter.setShowSql(properties.getDatabase().getHibernate().isShowSql());
        adapter.setDatabasePlatform(properties.getDatabase().getHibernate().getDialect());
        adapter.setGenerateDdl(properties.getDatabase().getHibernate().isShowSql());
        if (properties.getDatabase().getDatabaseType() == null) throw new RuntimeException("You Must Specify The DatabaseType");
        adapter.setDatabase(Database.valueOf(properties.getDatabase().getDatabaseType().name()));
        return adapter;
    }

    private Properties hibernateProperties() {
        Properties hbmProperties = new Properties();
        hbmProperties.setProperty(Environment.DIALECT, properties.getDatabase().getHibernate().getDialect());
        hbmProperties.setProperty(Environment.HBM2DDL_AUTO, properties.getDatabase().getHibernate().getHbm2DDLAuto());
        hbmProperties.setProperty(Environment.USE_SQL_COMMENTS, "" + properties.getDatabase().getHibernate().isShowSqlComments());
        hbmProperties.setProperty(Environment.SHOW_SQL, "" + properties.getDatabase().getHibernate().isShowSql());
        hbmProperties.setProperty(Environment.USE_SQL_COMMENTS, "false");
        hbmProperties.setProperty(Environment.FORMAT_SQL, "" + properties.getDatabase().getHibernate().isFormatSQL());
        hbmProperties.setProperty(Environment.USE_SECOND_LEVEL_CACHE, "" + properties.getDatabase().getHibernate().isEnableSecondLevelCache());
        hbmProperties.setProperty(Environment.USE_QUERY_CACHE, "" + properties.getDatabase().getHibernate().isEnableQueryCache());
        hbmProperties.setProperty(Environment.AUTO_EVICT_COLLECTION_CACHE, "" + properties.getDatabase().getHibernate().isEnableAutoEvictCollCache());
        hbmProperties.setProperty(Environment.USE_STRUCTURED_CACHE, "" + properties.getDatabase().getHibernate().isEnableStructuredCache());
        if(properties.getDatabase().getHibernate().getSecondLevelCacheRegionFactoryClass() != null)
            hbmProperties.setProperty(Environment.CACHE_REGION_FACTORY, "" + properties.getDatabase().getHibernate().getSecondLevelCacheRegionFactoryClass());
        return hbmProperties;
    }
}
