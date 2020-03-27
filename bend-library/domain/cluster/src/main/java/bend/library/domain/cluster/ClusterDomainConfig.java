package bend.library.domain.cluster;

import bend.library.constant.BaseConstants;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * This is the boot-configuration for domain module, which is used to search component's from
 * it's bootstrap path and associate all child packages.
 * <p>
 * Here cluster means different database configuration cluster and that module will contain all
 * configuration
 *
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/7/2020
 */
@Configuration
@ComponentScan(value = "bend.library.domain.cluster")
@EnableJpaRepositories(
        basePackages = {"bend.library.domain.cluster.repositories"}
        , entityManagerFactoryRef = BaseConstants.BASE_ENTITY_MANAGER_NAME
        , transactionManagerRef = BaseConstants.BASE_TRANSACTION_NAME
)
public class ClusterDomainConfig {
}
