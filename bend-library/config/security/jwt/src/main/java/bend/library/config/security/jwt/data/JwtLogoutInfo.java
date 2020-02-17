package bend.library.config.security.jwt.data;

import bend.library.config.security.data.LogoutInfo;
import lombok.Getter;
import lombok.Setter;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */

@Getter
@Setter
public class JwtLogoutInfo extends LogoutInfo {
    private String token;
    private String ipAddress;
    private String browserId;
}
