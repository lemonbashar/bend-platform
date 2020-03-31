package bend.library.config.security.service;

public interface SecurityService {
    boolean isAuthenticated();

    boolean isAnyAdmin();

    boolean isSuperAdmin();

    boolean isSettingsAdmin();

    boolean isUserAdmin();

    boolean hasAnyAuthority(String... authorities);
}
