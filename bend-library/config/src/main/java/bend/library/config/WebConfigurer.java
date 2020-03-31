package bend.library.config;

import bend.framework.properties.springproperties.SpringProperties;
import bend.framework.properties.springproperties.settings.security.Cors;
import bend.library.config.util.StringUtility;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.function.Consumer;
import java.util.function.Supplier;

/*TODO:ADD ONLY AUTHORIZED CORS-ORIGIN URL LIKE: .allowedOrigins("http://localhost:4200","http://192.168.0.153:4200") AND
* config.addAllowedOrigin("http://localhost:4200");
        config.addAllowedOrigin("http://192.168.0.153:4200");
*
* */
@EnableWebMvc
@Configuration
@ConditionalOnProperty(value = "bend-platform.settings.security.cors.active", havingValue = "true", matchIfMissing = false)
public class WebConfigurer implements WebMvcConfigurer {
    private final Cors cors;

    public WebConfigurer(SpringProperties properties) {
        this.cors = properties.getSettings().getSecurity().getCors();
    }

    private static void dynamicAdder(Supplier<String[]> valueExistence, Consumer<String> valueConsumer) {
        if (StringUtility.isNullOrEmpty(valueExistence.get()))
            valueConsumer.accept("*");
        else for (String val : valueExistence.get())
            valueConsumer.accept(val);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/*")
                .allowedHeaders(StringUtility.isNullOrEmpty(this.cors.getAllowedHeaders()) ? new String[]{"*"} : this.cors.getAllowedHeaders())
                .allowedOrigins(StringUtility.isNullOrEmpty(this.cors.getAllowedClients()) ? new String[]{"*"} : this.cors.getAllowedClients())
                .allowedMethods(StringUtility.isNullOrEmpty(this.cors.getAllowedMethods()) ? new String[]{"*"} : this.cors.getAllowedMethods())
                .allowCredentials(this.cors.isAllowCredentials());
    }

    @Bean
    public FilterRegistrationBean<CorsFilter> corsFilterRegistration() {
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(corsFilter());
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);

        return bean;
    }

    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(this.cors.isAllowCredentials());
        dynamicAdder(this.cors::getAllowedClients, config::addAllowedOrigin);
        dynamicAdder(this.cors::getAllowedHeaders, config::addAllowedHeader);
        dynamicAdder(this.cors::getAllowedMethods, config::addAllowedMethod);
        dynamicAdder(this.cors::getExposedHeaders, config::addExposedHeader);
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
