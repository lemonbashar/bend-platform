package bend.library.config.security.util;

import bend.framework.base.util.BendOptional;
import bend.library.config.security.data.CustomUserDetails;
import bend.library.config.security.registry.enumeretion.RegistryDetectionType;
import bend.library.constant.SecurityConstants;
import bend.library.data.AccountInfo;
import bend.library.domain.entity.User;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.math.BigInteger;
import java.util.Collection;
import java.util.HashSet;
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
                .isAllTrue(Objects::nonNull, authentication -> Objects.nonNull(authentication.getPrincipal()), authentication -> authentication.getPrincipal() instanceof CustomUserDetails, auth -> ((CustomUserDetails) auth.getPrincipal()).getUsername() != null);
    }

    @SuppressWarnings("unchecked")
    public static boolean hasAnyAuthority(final String... authorities) {
        Set<String> set = BendOptional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
                .ifThenMap(Objects::nonNull, Authentication::getPrincipal)
                .ifThenMap(Objects::nonNull, obj -> ((CustomUserDetails)obj).getAuthorities())
                .ifThenMap(Objects::nonNull, auths -> ((Set<GrantedAuthority>)auths).stream().map(GrantedAuthority::getAuthority).collect(Collectors.toSet())).map(obj -> (Set<String>)obj).get();
        if (set == null) return false;
        for (String authority : authorities)
            if (set.contains(authority))
                return true;
        return false;
    }

    public static User loggedInUser() {
        return (User) BendOptional.ofNullable(loggedInUserId())
                .ifThenMap(Objects::nonNull, User::new).get();
    }

    public static BigInteger loggedInUserId() {
        return (BigInteger) BendOptional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
                .ifThenMap(Objects::nonNull, Authentication::getPrincipal)
                .ifThenMap(obj->Objects.nonNull(obj) && obj instanceof CustomUserDetails, obj->(CustomUserDetails)obj)
                .ifThenMap(Objects::nonNull, obj -> ((CustomUserDetails)obj).getId()).get();
    }

    public static String loggedInUsername() {
        return (String) BendOptional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
                .ifThenMap(Objects::nonNull, Authentication::getPrincipal) /*If Exists then map with next object otherwise response null*/
                .ifThenMap(obj->Objects.nonNull(obj) && obj instanceof CustomUserDetails, obj->(CustomUserDetails)obj)
                .ifThenMap(Objects::nonNull, obj -> ((CustomUserDetails)obj).getUsername()).get();
    }

    public static Authentication authentication() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

    public static AccountInfo accountInfo() {
        return (AccountInfo) BendOptional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
                .ifThenMap(Objects::nonNull, Authentication::getPrincipal)
                .ifThenMap(obj->Objects.nonNull(obj) && obj instanceof CustomUserDetails, obj->(CustomUserDetails)obj)
                .ifThenMap(Objects::nonNull,  userDetails -> new AccountInfo(((UserDetails)userDetails).getUsername(), ((UserDetails)userDetails).getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toSet()), true))
                .orElse(null);
    }

    public static boolean isSuperAdmin() {
        return hasAnyAuthority(SecurityConstants.AuthorityConstants.ROLES_FOR_SUPER_ADMIN);
    }

    public static CustomUserDetailsExtractor<Object> extractFromPrincipal() {
        return extractFromPrincipal(Object.class);
    }

    public static CustomUserDetailsExtractor<String> extractStringFromPrincipal() {
        return extractFromPrincipal(String.class);
    }

    public static CustomUserDetailsExtractor<Long> extractLongFromPrincipal() {
        return extractFromPrincipal(Long.class);
    }

    @SuppressWarnings("unchecked")
    public static <T> CustomUserDetailsExtractor<T> extractFromPrincipal(Class<T> returnType) {
        return BendOptional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
                .ifThenMap(Objects::nonNull, Authentication::getPrincipal)
                .ifThenMap(obj->Objects.nonNull(obj) && obj instanceof CustomUserDetails, obj->(CustomUserDetails)obj)
                .ifThenMapOtherwiseNull(obj -> Objects.nonNull(obj) &&  obj instanceof CustomUserDetails, principal -> new CustomUserDetailsExtractor<T>((CustomUserDetails) principal, returnType)).get();
    }

    public static void updateRegistryDetection(RegistryDetectionType registryDetectionType, String registryDetectionValue) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        CustomUserDetails customUserDetails = null;
        Object credentials = null;
        Collection<? extends GrantedAuthority> grantedAuthorities = new HashSet<>();

        if (authentication != null && authentication.getPrincipal() != null && authentication.getPrincipal() instanceof CustomUserDetails) {
            customUserDetails = (CustomUserDetails) authentication.getPrincipal();
            grantedAuthorities = authentication.getAuthorities();
            credentials = authentication.getCredentials();
        } else customUserDetails = new CustomUserDetails();
        customUserDetails.setRegistryDetectionType(registryDetectionType);
        customUserDetails.setRegistryDetectionValue(registryDetectionValue);
        SecurityContextHolder.clearContext();
        SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(customUserDetails, credentials, grantedAuthorities));
    }
}
