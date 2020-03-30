package bend.library.config;

import bend.framework.properties.springproperties.SpringProperties;
import bend.framework.properties.springproperties.settings.security.Cors;
import bend.library.config.util.StringUtility;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
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
public class WebConfigurer implements WebMvcConfigurer {
    private final SpringProperties properties;
    private final Cors cors;

    public WebConfigurer(SpringProperties properties) {
        this.properties = properties;
        this.cors = properties.getSettings().getSecurity().getCors();
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/*")
                .allowedHeaders(StringUtility.isNullOrEmpty(this.cors.getAllowedHeaders())? new String[]{"*"}:this.cors.getAllowedHeaders())
                .allowedOrigins(StringUtility.isNullOrEmpty(this.cors.getAllowedClients())? new String[]{"*"}:this.cors.getAllowedClients())
                .allowedMethods(StringUtility.isNullOrEmpty(this.cors.getAllowedMethods())? new String[]{"*"}:this.cors.getAllowedMethods())
                .allowCredentials(this.cors.isAllowCredentials());
    }

    @Bean
    public CorsFilter corsFilter() {
        if(!this.cors.isActive()) return null;
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(this.cors.isAllowCredentials());
        /*Add Origins*/
        dynamicAdder(this.cors::getAllowedClients, config::addAllowedOrigin);

        /*Add Headers*/
        dynamicAdder(this.cors::getAllowedHeaders, config::addAllowedHeader);

        /*Add Methods*/
        dynamicAdder(this.cors::getAllowedMethods, config::addAllowedMethod);

        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

    private static void dynamicAdder(Supplier<String[]> valueExistence, Consumer<String> valueConsumer) {
        if(StringUtility.isNullOrEmpty(valueExistence.get()))
            valueConsumer.accept("*");
        else for(String val: valueExistence.get())
            valueConsumer.accept(val);
    }
}
