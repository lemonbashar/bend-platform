package bend.library.config.security.data;

import lombok.*;

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
@ToString(of = {"username", "authenticated"})
public class AccountInfo {
    private String username;
    private Set<String> authorities;
    private boolean authenticated;
}
