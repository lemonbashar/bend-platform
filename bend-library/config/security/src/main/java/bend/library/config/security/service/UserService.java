package bend.library.config.security.service;

import bend.library.domain.entity.User;

import java.math.BigInteger;
import java.util.Set;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
public interface UserService {

    /**
     * <pre>
     * Find and return Logged in user id, if user already authenticated,
     * otherwise return system user-id if system user exist on database,
     * otherwise it create system user and return.
     * </pre>
     *
     * @return Logged in user id, if user already authenticated, otherwise return system user-id
     */
    BigInteger loggedInUserIdOrSystemUserId();

    /**
     * @return Persisted System User
     */
    BigInteger systemUserId();

    /**
     * @param user User Entity
     * @return saved User
     */
    User saveUser(User user);

    /**
     * User Information to save on database.
     *
     * @param username    Username
     * @param email       email
     * @param password    non-encoded password
     * @param authorities string declared authorities
     * @return saved User
     */
    User saveUser(String username, String email, String password, String... authorities);

    Set<String> getAuthoritiesByUid(BigInteger userId);
}
