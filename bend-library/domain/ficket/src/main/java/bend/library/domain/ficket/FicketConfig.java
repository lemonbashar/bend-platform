package bend.library.domain.ficket;

import bend.library.constant.BaseConstants;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/7/2020
 */
@Configuration
@ComponentScan("bend.library.domain.ficket")
@EnableJpaRepositories(
        basePackages = {"bend.library.domain.ficket.repositories"}
        , entityManagerFactoryRef = BaseConstants.ROUTING_ENTITY_MANAGER_NAME
        , transactionManagerRef = BaseConstants.ROUTING_TRANSACTION_NAME
)
public class FicketConfig {
}
