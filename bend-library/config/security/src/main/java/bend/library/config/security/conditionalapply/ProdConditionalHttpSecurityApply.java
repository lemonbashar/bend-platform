package bend.library.config.security.conditionalapply;

import bend.library.constant.APiConstants;
import bend.library.constant.ProfileConstants;
import bend.library.config.security.ConditionalApply;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Service;

import static bend.library.constant.SecurityConstants.AuthorityConstants.ROLES_FOR_ADMIN;
import static bend.library.constant.SecurityConstants.AuthorityConstants.ROLES_FOR_SUPER_ADMIN;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/14/2020
 */
@Service
@Profile(ProfileConstants.PROD)
public class ProdConditionalHttpSecurityApply implements ConditionalApply<HttpSecurity> {
    @Override
    public void apply(HttpSecurity http) throws Exception {
        http
                .exceptionHandling(exceptionHandling -> exceptionHandling.accessDeniedPage(APiConstants.UtilityApi.ACCESS_DENIED_URL))
                .headers()
                .frameOptions()
                .disable()
                .and()
                .authorizeRequests()
                .mvcMatchers(APiConstants.PRIVATE_ROOT + "/**").authenticated()
                .mvcMatchers(APiConstants.PRIVATE_ADMIN_ROOT + "/**").hasAnyAuthority(ROLES_FOR_ADMIN)
                .mvcMatchers(APiConstants.PUBLIC_ROOT + "/**").permitAll()
                .mvcMatchers(APiConstants.ACTUATOR_PATH + "/**").hasAnyAuthority(ROLES_FOR_SUPER_ADMIN)
                .anyRequest().authenticated();
    }
}
