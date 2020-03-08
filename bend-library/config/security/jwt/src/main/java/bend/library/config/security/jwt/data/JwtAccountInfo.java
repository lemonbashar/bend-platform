package bend.library.config.security.jwt.data;

import bend.library.config.security.data.AccountInfo;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
@Getter
@Setter
public class JwtAccountInfo extends AccountInfo {
    private String token;

    public static JwtAccountInfoBuilder builder() {
        return new JwtAccountInfoBuilder();
    }

    public static final class JwtAccountInfoBuilder {
        private JwtAccountInfo accountInfo = new JwtAccountInfo();

        public JwtAccountInfoBuilder username(String username) {
            accountInfo.setUsername(username);
            return this;
        }

        public JwtAccountInfoBuilder token(String token) {
            accountInfo.setToken(token);
            return this;
        }

        public JwtAccountInfoBuilder authorities(Set<String> authorities) {
            accountInfo.setAuthorities(authorities);
            return this;
        }

        public JwtAccountInfo build() {
            return this.accountInfo;
        }
    }
}
