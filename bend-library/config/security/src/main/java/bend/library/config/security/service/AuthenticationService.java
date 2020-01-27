package bend.library.config.security.service;

import org.springframework.security.core.userdetails.UserDetails;

/**
 * CGI of Authentication service which must be implemented by
 * nested all security provider.
 *
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 1/27/2020
 */
public interface AuthenticationService {
    /**
     * Authenticate provided user-details user.
     * @param userDetails User-Details of user-credentials
     */
    void authenticate(UserDetails userDetails);
}
