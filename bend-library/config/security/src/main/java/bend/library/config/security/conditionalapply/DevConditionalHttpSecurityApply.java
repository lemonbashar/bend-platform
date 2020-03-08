package bend.library.config.security.conditionalapply;

import bend.library.config.constants.APiConstants;
import bend.library.config.constants.ProfileConstants;
import bend.library.config.security.ConditionalApply;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Service;

import static bend.library.config.constants.SecurityConstants.AuthorityConstants.ROLES_FOR_ADMIN;
import static bend.library.config.constants.SecurityConstants.AuthorityConstants.ROLES_FOR_SUPER_ADMIN;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/14/2020
 */
@Service
@Profile({ProfileConstants.DEV, ProfileConstants.TEST})
public class DevConditionalHttpSecurityApply implements ConditionalApply<HttpSecurity> {
    @Override
    public void apply(HttpSecurity http) throws Exception {
        http
                .exceptionHandling(exceptionHandling -> exceptionHandling.accessDeniedPage(APiConstants.UtilityApi.ACCESS_DENIED_URL))
                .headers()
                .frameOptions()
                .disable()
                .and()
                .csrf().disable()
                .authorizeRequests()
                .mvcMatchers(APiConstants.PRIVATE_ROOT + "/**").authenticated()
                .mvcMatchers(APiConstants.PRIVATE_ADMIN_ROOT + "/**").hasAnyAuthority(ROLES_FOR_ADMIN)
                .mvcMatchers(APiConstants.PUBLIC_ROOT + "/**").permitAll()
                .mvcMatchers("/actuator/**").hasAnyAuthority(ROLES_FOR_SUPER_ADMIN)
                .anyRequest().authenticated();
    }
}
