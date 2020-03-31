package bend.library.config.security.service;

import bend.library.domain.entity.Authority;

import java.util.Set;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
public interface AuthorityService {

    /**
     * <pre>
     * While you have some authorities but those may doesn't exist on database
     * but you need to save them and make sure at last you have valid authorities whose already exist on database.
     * </pre>
     *
     * @param authorities raw authorities which may not exist on database.
     * @return Valid Authorities
     */
    Set<Authority> validRawAuthorities(String... authorities);
}
