package bend.library.config.security.jwt;

import bend.library.config.security.ConditionalApply;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.ExceptionHandlingConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.Filter;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/13/2020
 */

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private Filter corsFilter;
    private SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> securityConfigurerAdapter;
    private ConditionalApply<HttpSecurity> conditionalSecurityApply;
    private Customizer<ExceptionHandlingConfigurer<HttpSecurity>> exceptionHandlingConfigurer;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling(exceptionHandlingConfigurer)
                .headers()
                .frameOptions()
                .disable()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().apply(securityConfigurerAdapter);
        conditionalSecurityApply.apply(http);
    }
}
