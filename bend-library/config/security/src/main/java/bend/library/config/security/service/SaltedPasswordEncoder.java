package bend.library.config.security.service;

/**
 * Use BCryptPassword encoder but keep user password more strong we have using username as salt.
 * thus if more user if have both password same, but their encoded password not match.
 *
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
public interface SaltedPasswordEncoder {
    /**
     * @param password password
     * @param salt     here salt means the username
     * @return encoded password
     */
    String encode(String password, String salt);

    /**
     * @param rawPassword     actor user's raw password
     * @param salt            username as salt
     * @param encodedPassword encoded password from database.
     * @return true if raw password and salt matched with encoded password.
     */
    boolean matches(String rawPassword, String salt, String encodedPassword);
}
