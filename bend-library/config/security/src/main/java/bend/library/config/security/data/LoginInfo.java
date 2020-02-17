package bend.library.config.security.data;

import lombok.Getter;
import lombok.Setter;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/14/2020
 */
@Setter
@Getter
public class LoginInfo {
    private String username;
    private String password;
    private boolean rememberMe;
}