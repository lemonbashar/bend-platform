package bend.library.config.security.jwt.data;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.Authentication;

@Setter
@Getter
public class AuthenticationWithRefreshedToken {
    private Authentication authentication;
    private String refreshedToken;
}
