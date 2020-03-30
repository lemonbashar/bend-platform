package bend.library.config.security.service;

import bend.library.data.AccountInfo;
import bend.library.data.LoginInfo;
import bend.library.data.LogoutInfo;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
public interface AuthenticationManager {
    /**
     * Authenticate the User info and return authenticated AccountInfo of implemented module.
     *
     * @param userInfo Complete User Info for Authentication
     * @return Authentication Object
     */
    AccountInfo authenticate(LoginInfo userInfo);

    /**
     * Logout the user and do after work of logout.
     *
     * @param logoutInfo information about logout.
     */
    void logout(LogoutInfo logoutInfo);
}
