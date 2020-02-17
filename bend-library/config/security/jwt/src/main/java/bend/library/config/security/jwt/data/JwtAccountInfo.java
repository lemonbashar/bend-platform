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

    public static Builder builder() {
        return new Builder();
    }

    public static final class Builder {
        private JwtAccountInfo accountInfo=new JwtAccountInfo();

        public Builder username(String username) {
            accountInfo.setUsername(username);
            return this;
        }

        public Builder token(String token) {
            accountInfo.setToken(token);
            return this;
        }

        public Builder authorities(Set<String> authorities) {
            accountInfo.setAuthorities(authorities);
            return this;
        }

        public JwtAccountInfo build() {
            return this.accountInfo;
        }
    }
}
