package bend.library.config.security.stateful.serviceimpl;

import bend.library.config.security.service.AuthenticationService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 1/27/2020
 */
@Service
public class StandardAuthenticationService implements AuthenticationService {
    @Override
    public void authenticate(UserDetails userDetails) {
        throw new RuntimeException("Not Yet Implemented");
    }
}
