package bend.library.config.security.jwt;

import bend.library.config.security.ConditionalApply;
import bend.library.config.security.jwt.configurer.JwtAuthConfigurerAdapter;
import bend.library.config.security.service.CustomUserDetailsService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.Filter;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/13/2020
 */

@RequiredArgsConstructor
@EnableWebSecurity
@Configuration
@ComponentScan("bend.library.config.security.jwt")
public class JwtSecurityConfig extends WebSecurityConfigurerAdapter {
    private final @NonNull Filter corsFilter;
    private final @NonNull JwtAuthConfigurerAdapter jwtAuthConfigurerAdapter;
    private final @NonNull ConditionalApply<HttpSecurity> conditionalSecurityApply;
    private final @NonNull CustomUserDetailsService customUserDetailsService;
    private final @NonNull PasswordEncoder passwordEncoder;

    @Bean
    @Override
    public AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder);

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().apply(jwtAuthConfigurerAdapter);
        conditionalSecurityApply.apply(http);
    }
}
