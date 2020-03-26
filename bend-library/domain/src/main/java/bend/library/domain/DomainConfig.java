package bend.library.domain;

import bend.library.config.constants.BaseConstants;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * This is the boot-configuration for domain module, which is used to search component's from
 * it's bootstrap path and associate all child packages.
 *
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/7/2020
 */
@Configuration
@ComponentScan("bend.library.domain")
@EnableJpaRepositories(
        basePackages = {"bend.library.domain.repositories"}
        , entityManagerFactoryRef = BaseConstants.ROUTING_ENTITY_MANAGER_NAME
        , transactionManagerRef = BaseConstants.ROUTING_TRANSACTION_NAME
)
public class DomainConfig {
}
