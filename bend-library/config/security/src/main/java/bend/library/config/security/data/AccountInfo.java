package bend.library.config.security.data;

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
public class AccountInfo {
    private String username;
    private Set<String> authorities;
}
