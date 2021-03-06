package bend.library.config.security.data;

import bend.library.config.security.registry.enumeretion.RegistryDetectionType;
import bend.library.domain.data.UserCrudData;
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
    @Setter
    private Set<? extends GrantedAuthority> authorities;
    @Setter
    private String registryDetectionValue;
    @Setter
    private RegistryDetectionType registryDetectionType;

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

    public static CustomUserDetails of(UserCrudData userCrudData) {
        return new CustomUserDetails(userCrudData.getId(), userCrudData.getUsername(), userCrudData.getPassword());
    }
}
