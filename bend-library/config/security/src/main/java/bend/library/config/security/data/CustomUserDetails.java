package bend.library.config.security.data;

import bend.library.domain.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.math.BigInteger;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
@AllArgsConstructor
@Getter
public class CustomUserDetails implements UserDetails {
    private BigInteger id;
    private String username;
    private String password;
    private boolean enabled;
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialsNonExpired;
    private Set<? extends GrantedAuthority> authorities;


    public static CustomUserDetails of(User user) {
        return new CustomUserDetails(user.getId(), user.getUsername(), user.getPassword(),user.isActive(), true, true, true, user.getAuthorities().stream().map(authority -> new SimpleGrantedAuthority(authority.getAuthority())).collect(Collectors.toSet()));
    }
}
