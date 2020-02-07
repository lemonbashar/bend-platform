package bend.library.domain;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/7/2020
 */
@Configuration
@EnableJpaRepositories(
        basePackages = {"bend.library.domain.repositories"}
        , entityManagerFactoryRef = "bendEntityManager"
        , transactionManagerRef = "bendTransactionManager"
)
public class DomainConfig {
}
