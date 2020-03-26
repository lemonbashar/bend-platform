package bend.library.config.security.data;

import bend.library.domain.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.math.BigInteger;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
@NoArgsConstructor
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
    @Setter
    private String registryDetectionValue;
    @Setter
    private String registryDetectionType;

    public CustomUserDetails(BigInteger id, String username, String password, boolean enabled, boolean accountNonExpired, boolean accountNonLocked, boolean credentialsNonExpired, Set<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.enabled = enabled;
        this.accountNonExpired = accountNonExpired;
        this.accountNonLocked = accountNonLocked;
        this.credentialsNonExpired = credentialsNonExpired;
        this.authorities = authorities;
    }

    public CustomUserDetails(BigInteger id, String username, String password, String... authorities) {
        this(id, username, password, true, true, true, true, Stream.of(authorities).map(SimpleGrantedAuthority::new).collect(Collectors.toSet()));
    }

    public CustomUserDetails(BigInteger id, String username, String password, Set<? extends GrantedAuthority> authorities) {
        this(id, username, password, true, true, true, true, authorities);
    }

    public static CustomUserDetails of(User user) {
        return new CustomUserDetails(user.getId(), user.getUsername(), user.getPassword(), user.getAuthorities().stream().map(authority -> new SimpleGrantedAuthority(authority.getName())).collect(Collectors.toSet()));
    }
}
