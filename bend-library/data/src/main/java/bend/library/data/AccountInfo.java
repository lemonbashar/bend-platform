package bend.library.data;

import lombok.*;

import java.math.BigInteger;
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
public class AccountInfo extends BaseData<BigInteger> {
    private String username;
    private Set<String> authorities;
    private boolean authenticated;
}
