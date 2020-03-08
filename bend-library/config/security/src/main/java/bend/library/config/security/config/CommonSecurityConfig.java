package bend.library.config.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.security.SecureRandom;

/**
 * Some common bean's exporter configurations.
 *
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/13/2020
 */
@EnableWebMvc
@Configuration
public class CommonSecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(BCryptPasswordEncoder.BCryptVersion.$2Y, new SecureRandom());
    }
}
