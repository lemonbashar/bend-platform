package bend.library.config.security.service;

import bend.library.domain.entity.Authority;
import bend.library.domain.entity.User;

import java.util.Set;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
public interface AuthorityService {

    /**
     * While you have some authorities but those may doesn't exist on database
     * but you need to save them and make sure at last you have valid authorities whose already exist on database.
     * @param createdBy createBy User
     * @param authorities authorities
     * @return Valid Authorities
     */
    Set<Authority> validRawAuthorities(User createdBy, String ...authorities);
}
