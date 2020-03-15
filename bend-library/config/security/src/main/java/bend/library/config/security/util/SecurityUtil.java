package bend.library.config.security.util;

import bend.framework.base.util.BendOptional;
import bend.library.config.constants.SecurityConstants;
import bend.library.config.security.data.AccountInfo;
import bend.library.config.security.data.CustomUserDetails;
import bend.library.domain.entity.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import java.math.BigInteger;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
public final class SecurityUtil {
    public static boolean isAuthenticated() {
        return BendOptional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
                .isAllTrue(Objects::nonNull, authentication -> Objects.nonNull(authentication.getPrincipal()), authentication -> authentication.getPrincipal() instanceof CustomUserDetails);
    }

    public static boolean hasAnyAuthority(final String... authorities) {
        Set<String> set = BendOptional.ofNullable((Object) SecurityContextHolder.getContext().getAuthentication())
                .ifThenMap(Objects::nonNull, obj -> ((Authentication) obj).getPrincipal())
                .ifThenMap(Objects::nonNull, principal -> ((CustomUserDetails) principal).getAuthorities())
                .ifThenMap(Objects::nonNull, auths -> auths.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toSet())).get();
        if (set == null) return false;
        for (String authority : authorities)
            if (set.contains(authority))
                return true;
        return false;
    }

    public static User loggedInUser() {
        return BendOptional.ofNullable(loggedInUserId())
                .ifThenMap(Objects::nonNull, User::new).get();
    }

    public static BigInteger loggedInUserId() {
        return BendOptional.ofNullable((Object) SecurityContextHolder.getContext().getAuthentication())
                .ifThenMap(Objects::nonNull, obj -> ((Authentication) obj).getPrincipal())
                .ifThenMap(Objects::nonNull, principal -> ((CustomUserDetails) principal).getId()).get();
    }

    public static Authentication authentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

    public static AccountInfo accountInfo() {
        return BendOptional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
                .ifThenMap(Objects::nonNull, auth -> (CustomUserDetails) auth.getPrincipal())
                .ifThenMap(Objects::nonNull, userDetails -> new AccountInfo(userDetails.getUsername(), userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toSet()), true))
                .orElse(null);
    }

    public static boolean isSuperAdmin() {
        return hasAnyAuthority(SecurityConstants.AuthorityConstants.ROLES_FOR_SUPER_ADMIN);
    }
}
