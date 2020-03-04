package bend.library.config.database.rdbms;

import bend.framework.base.util.BendOptional;
import bend.framework.properties.springproperties.SpringProperties;
import com.zaxxer.hikari.HikariDataSource;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.hibernate.cfg.Environment;
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

import javax.sql.DataSource;
import java.util.Objects;
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
        return BendOptional.of(new HikariDataSource())
                .insideOperation(hd->hd.setUsername(properties.getDatabase().getUsername()))
                .insideOperation(hd->hd.setPassword(properties.getDatabase().getPassword()))
                .insideOperation(hd->hd.setJdbcUrl(properties.getDatabase().getUrl()))
                .insideOperation(hd->hd.setDriverClassName(properties.getDatabase().getDriver()))
                .insideOperation(hd->hd.setConnectionTimeout(properties.getDatabase().getConnectionTimeout()))
                .insideOperation(hd->hd.setMinimumIdle(properties.getDatabase().getMinIdleConnectionSize()))
                .insideOperation(hd->hd.setMaximumPoolSize(properties.getDatabase().getMaxPoolSize()))
                .insideOperation(hd->hd.setIdleTimeout(properties.getDatabase().getIdleTimeout()))
                .insideOperation(hd->hd.setAutoCommit(properties.getDatabase().isAutoCommit()))
                .insideOperation(hd->hd.setPoolName(properties.getDatabase().getDatasourcePoolName())).get();
    }

    @Bean(name = "bendTransactionManager")
    public PlatformTransactionManager platformTransactionManager(LocalContainerEntityManagerFactoryBean entityManagerFactoryBean) {
        return BendOptional.of(new JpaTransactionManager())
                .insideOperation(tm->tm.setEntityManagerFactory(entityManagerFactoryBean.getObject())).get();
    }

    @Bean(name = "bendEntityManager")
    public LocalContainerEntityManagerFactoryBean localContainerEntityManager(DataSource dataSource, JpaVendorAdapter jpaVendorAdapter) {
        return BendOptional.of(new LocalContainerEntityManagerFactoryBean())
                .insideOperation(em->em.setDataSource(dataSource))
                .insideOperation(em->em.setPackagesToScan(properties.getDatabase().getHibernate().getAnnotatedPackages()))
                .insideOperation(em->em.setJpaVendorAdapter(jpaVendorAdapter))
                .insideOperation(em->em.setJpaProperties(hibernateProperties())).get();
    }

    @Bean
    public JpaVendorAdapter jpaVendorAdapter() {
        return BendOptional.of(new HibernateJpaVendorAdapter())
                .insideOperation(adapter->adapter.setShowSql(properties.getDatabase().getHibernate().isShowSql()))
                .insideOperation(adapter->adapter.setDatabasePlatform(properties.getDatabase().getHibernate().getDialect()))
                .insideOperation(adapter->adapter.setGenerateDdl(properties.getDatabase().getHibernate().isShowSql()))
                .mustTrue(()-> Objects.nonNull(properties.getDatabase().getDatabaseType()))
                .insideOperation(adapter->adapter.setDatabase(Database.valueOf(properties.getDatabase().getDatabaseType().name()))).get();
    }

    private Properties hibernateProperties() {
        return BendOptional.of(new Properties())
                .insideOperation(prp->prp.setProperty(Environment.DIALECT, properties.getDatabase().getHibernate().getDialect()))
                .insideOperation(prp->prp.setProperty(Environment.HBM2DDL_AUTO, properties.getDatabase().getHibernate().getHbm2DDLAuto()))
                .insideOperation(prp->prp.setProperty(Environment.USE_SQL_COMMENTS, "" + properties.getDatabase().getHibernate().isShowSqlComments()))
                .insideOperation(prp->prp.setProperty(Environment.SHOW_SQL, "" + properties.getDatabase().getHibernate().isShowSql()))
                .insideOperation(prp->prp.setProperty(Environment.USE_SQL_COMMENTS, "false"))
                .insideOperation(prp->prp.setProperty(Environment.FORMAT_SQL, "" + properties.getDatabase().getHibernate().isFormatSQL()))
                .insideOperation(prp->prp.setProperty(Environment.USE_SECOND_LEVEL_CACHE, "" + properties.getDatabase().getHibernate().isEnableSecondLevelCache()))
                .insideOperation(prp->prp.setProperty(Environment.USE_QUERY_CACHE, "" + properties.getDatabase().getHibernate().isEnableQueryCache()))
                .insideOperation(prp->prp.setProperty(Environment.AUTO_EVICT_COLLECTION_CACHE, "" + properties.getDatabase().getHibernate().isEnableAutoEvictCollCache()))
                .insideOperation(prp->prp.setProperty(Environment.USE_STRUCTURED_CACHE, "" + properties.getDatabase().getHibernate().isEnableStructuredCache()))
                .ifThenConsume(()->Objects.nonNull(properties.getDatabase().getHibernate().getSecondLevelCacheRegionFactoryClass()), prp-> prp.setProperty(Environment.CACHE_REGION_FACTORY, "" + properties.getDatabase().getHibernate().getSecondLevelCacheRegionFactoryClass())).get();
    }
}
