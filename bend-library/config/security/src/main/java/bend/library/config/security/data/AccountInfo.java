package bend.library.config.security.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccountInfo {
    private String username;
    private Set<String> authorities;
    private boolean authenticated;
}
