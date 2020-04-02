package bend.library.config.security.service;

import bend.library.config.security.util.SecurityUtil;
import bend.library.constant.SecurityConstants;
import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.core.Authentication;

import java.io.Serializable;

@SuppressWarnings("WeakerAccess")
public class GlobalPermissionEvaluator implements PermissionEvaluator {
    public static final String READ = "READ";
    public static final String WRITE = "WRITE";
    public static final String IS_ADMIN = "IS_ADMIN";

    /**
     * permission is the permission type of like hasPermission(,'READ')
     */
    @Override
    public boolean hasPermission(Authentication authentication, Object target, Object permission) {
        switch (permission.toString()) {
            case READ:
                return true;
            case WRITE:
                return SecurityUtil.isAuthenticated();
            case IS_ADMIN:
                return SecurityUtil.hasAnyAuthority(SecurityConstants.AuthorityConstants.ROLES_FOR_ADMIN);
        }
        return false;
    }

    @Override
    public boolean hasPermission(Authentication authentication, Serializable targetId, String targetType, Object permission) {
        return false;
    }
}
