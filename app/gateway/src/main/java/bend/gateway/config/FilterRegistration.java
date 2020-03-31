/*
package bend.gateway.config;

import bend.framework.properties.springproperties.SpringProperties;
import bend.library.config.WebConfigurer;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.filter.CorsFilter;

@RequiredArgsConstructor
@Configuration
public class FilterRegistration {
    private final @NonNull SpringProperties properties;

    @Bean
    public FilterRegistrationBean<CorsFilter> corsFilter() {
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(WebConfigurer.corsFilter(this.properties.getSettings().getSecurity().getCors()));
        bean.setEnabled(true);
        bean.setOrder(Integer.MIN_VALUE);
        return bean;
    }
}
*/
