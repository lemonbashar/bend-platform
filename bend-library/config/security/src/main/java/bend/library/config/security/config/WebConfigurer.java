package bend.library.config.security.config;

import bend.framework.properties.springproperties.SpringProperties;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/*TODO:ADD ONLY AUTHORIZED CORS-ORIGIN URL LIKE: .allowedOrigins("http://localhost:4200","http://192.168.0.153:4200") AND
* config.addAllowedOrigin("http://localhost:4200");
        config.addAllowedOrigin("http://192.168.0.153:4200");
*
* */
@RequiredArgsConstructor
@Configuration
public class WebConfigurer implements WebMvcConfigurer {

    private final SpringProperties properties;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/*")
                .allowedHeaders("*")
                .allowedOrigins(properties.getSettings().getSecurity().getCors().getAllowedClients()) /*FOR ALL CLIENT URL*/
                .allowedMethods("*")
                .allowCredentials(true);
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        for (String allowedClient : properties.getSettings().getSecurity().getCors().getAllowedClients())
            config.addAllowedOrigin(allowedClient);
        config.addAllowedHeader("*");
        config.addAllowedMethod("OPTIONS");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("DELETE");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
