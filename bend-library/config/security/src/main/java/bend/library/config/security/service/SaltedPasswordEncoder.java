package bend.library.config.security.service;

/**
 * Use BCryptPassword encoder but keep user password more strong we have using username as salt.
 * thus if more user if have both password same, but their encoded password not match.
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
public interface SaltedPasswordEncoder{
    /**
     * @param password password
     * @param salt here salt means the username
     * @return encoded password
     */
    String encode(String password, String salt);

    boolean matches(String rawPassword, String salt, String encodedPassword);
}
