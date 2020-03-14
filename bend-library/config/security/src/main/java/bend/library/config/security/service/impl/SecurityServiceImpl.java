package bend.library.config.security.service.impl;

import bend.library.config.security.service.SecurityService;
import bend.library.config.security.util.SecurityUtil;
import org.springframework.stereotype.Service;

@Service("securityService")
public class SecurityServiceImpl implements SecurityService {
    @Override
    public boolean isAuthenticated() {
        return SecurityUtil.isAuthenticated();
    }

    @Override
    public boolean hasAnyAuthority(String... authorities) {
        return SecurityUtil.hasAnyAuthority(authorities);
    }


}
