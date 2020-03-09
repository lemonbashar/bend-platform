package bend.library.config.security.service;


import bend.library.config.security.data.AccountInfo;
import bend.library.config.security.data.LoginInfo;
import org.springframework.http.ResponseEntity;

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
     * Authenticate provided user-details user and return response-entity with module implemented account-info.
     *
     * @param loginInfo User-Details of user-credentials
     */
    ResponseEntity<AccountInfo> authenticate(LoginInfo loginInfo);
}
