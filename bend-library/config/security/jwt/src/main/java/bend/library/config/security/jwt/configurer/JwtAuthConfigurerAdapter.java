package bend.library.config.security.jwt.configurer;

import bend.library.config.security.jwt.filter.jwt.JwtAuthenticationFilter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.CorsFilter;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/14/2020
 */

@Service
@RequiredArgsConstructor
public class JwtAuthConfigurerAdapter extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {
    private final @NonNull JwtAuthenticationFilter jwtAuthenticationFilter;

    @Override
    public void configure(HttpSecurity builder) throws Exception {
        builder.addFilterAfter(jwtAuthenticationFilter, CorsFilter.class);
    }
}
