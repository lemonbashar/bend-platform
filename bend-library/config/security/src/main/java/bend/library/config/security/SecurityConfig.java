package bend.library.config.security;

import bend.library.domain.DomainConfig;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * This is the boot-configuration for security module, which is used to search component's from
 * it's bootstrap path and associate all child packages.
 *
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/17/2020
 */
@Configuration
@ComponentScan(value = "bend.library.config.security")
public class SecurityConfig {
}
