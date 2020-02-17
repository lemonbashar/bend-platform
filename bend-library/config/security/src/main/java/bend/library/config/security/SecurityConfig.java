package bend.library.config.security;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * This is the boot-configuration for security module, which is used to search component's from
 * it's bootstrap path and associate all child packages.
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/17/2020
 */
@Configuration
@ComponentScan("bend.library.config.security")
public class SecurityConfig {
}
