package bend.library.config.database;

import bend.library.config.database.filter.RoutingDataSourceFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("bend.library.config.database")
public class RoutingDatasourceConfigurer {
    @Bean
    public FilterRegistrationBean<RoutingDataSourceFilter> routeFilter() {
        FilterRegistrationBean<RoutingDataSourceFilter> bean = new FilterRegistrationBean<>();
        bean.setOrder(Integer.MAX_VALUE);
        bean.setEnabled(true);
        bean.setFilter(new RoutingDataSourceFilter());

        return bean;
    }
}
