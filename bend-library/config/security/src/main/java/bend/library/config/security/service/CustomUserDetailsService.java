package bend.library.config.security.service;

import bend.library.config.security.data.CustomUserDetails;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
public interface CustomUserDetailsService extends UserDetailsService {
    @Override
    default UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return findUserDetails(username.toLowerCase());
    }

    /**
     * Find user-details from database and return to respondent.
     * @param username lowercase username of user.
     * @return User-Details if it find user by username
     */
    CustomUserDetails findUserDetails(String username);
}
