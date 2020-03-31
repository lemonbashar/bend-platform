package bend.library.config.security.jwt;

import bend.library.config.security.ConditionalApply;
import bend.library.config.security.jwt.configurer.JwtAuthConfigurerAdapter;
import bend.library.config.security.service.CustomUserDetailsService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;

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
    public void configure(WebSecurity web) throws Exception {
        web.ignoring()
                .antMatchers(HttpMethod.OPTIONS, "/**")    // <---------- You need this
                .antMatchers(
                        "/**/*.{js,html,css,ico}",
                        "/i18n/**",
                        "/assets/**",
                        "/v2/api-docs/**",
                        "/webjars/**",
                        "/swagger-resources/**",
                        "/swagger-ui.html");
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder);

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().apply(jwtAuthConfigurerAdapter);
        conditionalSecurityApply.apply(http);
    }
}
