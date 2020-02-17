package bend.library.config.security.util;

import bend.framework.base.util.BendOptional;
import bend.library.config.security.data.CustomUserDetails;
import bend.library.domain.entity.User;
import org.springframework.security.core.context.SecurityContextHolder;

import java.math.BigInteger;
import java.util.Objects;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
public final class SecurityUtil {
    public static User loggedInUser() {
        return isAuthenticated()? BendOptional.of(SecurityContextHolder.getContext().getAuthentication().getPrincipal())
                .map(principal->new User(((CustomUserDetails)principal).getId())).get(): null;
    }

    public static boolean isAuthenticated() {
        return BendOptional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
                .isAllTrue(Objects::nonNull, authentication -> Objects.nonNull(authentication.getPrincipal()), authentication->authentication.getPrincipal() instanceof CustomUserDetails);
    }
}
