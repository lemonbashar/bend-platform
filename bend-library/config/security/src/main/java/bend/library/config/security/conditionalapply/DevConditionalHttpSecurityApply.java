package bend.library.config.security.conditionalapply;

import bend.library.config.constants.ProfileConstants;
import bend.library.config.security.ConditionalApply;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Service;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/14/2020
 */
@Service
@Profile(ProfileConstants.DEV)
public class DevConditionalHttpSecurityApply implements ConditionalApply<HttpSecurity> {
    @Override
    public void apply(HttpSecurity http) throws Exception {
        http.authorizeRequests().anyRequest().permitAll();
    }
}
