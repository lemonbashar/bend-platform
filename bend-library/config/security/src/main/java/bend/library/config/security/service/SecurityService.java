package bend.library.config.security.service;

public interface SecurityService {
    boolean isAuthenticated();

    boolean hasAnyAuthority(String ...authorities);
}
