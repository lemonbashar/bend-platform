package bend.library.config.security.service.impl;

import bend.library.config.security.service.SecurityService;
import bend.library.config.security.util.SecurityUtil;
import bend.library.constant.SecurityConstants;
import org.springframework.stereotype.Service;

@Service("securityService")
public class SecurityServiceImpl implements SecurityService {
    @Override
    public boolean isAuthenticated() {
        return SecurityUtil.isAuthenticated();
    }

    @Override
    public boolean isAnyAdmin() {
        return SecurityUtil.hasAnyAuthority(SecurityConstants.AuthorityConstants.ROLES_FOR_ADMIN);
    }

    @Override
    public boolean isSuperAdmin() {
        return SecurityUtil.hasAnyAuthority(SecurityConstants.AuthorityConstants.ROLES_FOR_SUPER_ADMIN);
    }

    @Override
    public boolean isSettingsAdmin() {
        return SecurityUtil.hasAnyAuthority(SecurityConstants.AuthorityConstants.ROLES_FOR_SETTINGS_ADMIN);
    }

    @Override
    public boolean isUserAdmin() {
        return SecurityUtil.hasAnyAuthority(SecurityConstants.AuthorityConstants.ROLES_FOR_USER_ADMIN);
    }

    @Override
    public boolean hasAnyAuthority(String... authorities) {
        return SecurityUtil.hasAnyAuthority(authorities);
    }


}
