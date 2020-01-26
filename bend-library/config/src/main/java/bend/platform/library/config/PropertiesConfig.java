package bend.platform.library.config;

import bend.framework.properties.springproperties.SpringProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Config properties files
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 1/26/2020
 */

@Configuration
@EnableConfigurationProperties
public class PropertiesConfig {

    @Bean
    @ConfigurationProperties(prefix = "bend-platform")
    public SpringProperties properties() {
        return new SpringProperties();
    }
}
