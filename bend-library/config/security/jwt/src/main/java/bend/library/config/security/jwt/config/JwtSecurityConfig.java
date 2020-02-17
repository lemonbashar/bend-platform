package bend.library.config.security.jwt.config;

import bend.library.config.security.ConditionalApply;
import bend.library.config.security.jwt.configurer.JwtAuthConfigurerAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.Filter;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/13/2020
 */

@RequiredArgsConstructor
@Configuration
public class JwtSecurityConfig extends WebSecurityConfigurerAdapter {
    private final Filter corsFilter;
    private final JwtAuthConfigurerAdapter jwtAuthConfigurerAdapter;
    private final ConditionalApply<HttpSecurity> conditionalSecurityApply;

    @Bean
    @Override
    public AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().apply(jwtAuthConfigurerAdapter);
        conditionalSecurityApply.apply(http);
    }
}
