package bend.library.data;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.math.BigInteger;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/14/2020
 */
@Setter
@Getter
public class LoginInfo extends BaseData<BigInteger> {
    @NotNull
    private String username;
    @NotNull
    private String password;
    private boolean rememberMe;

    public static LoginInfoBuilder builder() {
        return new LoginInfoBuilder();
    }

    public static class LoginInfoBuilder {
        private LoginInfo loginInfo = new LoginInfo();

        public LoginInfoBuilder id(BigInteger id) {
            this.loginInfo.id = id;
            return this;
        }

        public LoginInfoBuilder username(String username) {
            this.loginInfo.username = username;
            return this;
        }

        public LoginInfoBuilder password(String password) {
            this.loginInfo.password = password;
            return this;
        }

        public LoginInfoBuilder rememberMe(boolean rememberMe) {
            this.loginInfo.rememberMe = rememberMe;
            return this;
        }

        public LoginInfo build() {
            return this.loginInfo;
        }

    }
}
