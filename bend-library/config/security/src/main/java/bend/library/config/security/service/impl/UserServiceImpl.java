package bend.library.config.security.service.impl;

import bend.framework.base.util.BendOptional;
import bend.library.config.constants.SecurityConstants;
import bend.library.config.security.service.AuthorityService;
import bend.library.config.security.service.SaltedPasswordEncoder;
import bend.library.config.security.service.UserService;
import bend.library.config.security.util.SecurityUtil;
import bend.library.domain.entity.User;
import bend.library.domain.repositories.UserRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.HashSet;
import java.util.Objects;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    private final @NonNull UserRepository userRepository;
    private final @NonNull AuthorityService authorityService;
    private final @NonNull SaltedPasswordEncoder saltedPasswordEncoder;

    @Override
    public BigInteger loggedInUserIdOrSystemUserId() {
        return BendOptional.ofNullable(SecurityUtil.loggedInUser())
                .ifNotPresentThenConsume(this::systemUser).get().getId();
    }

    @Override
    public User systemUser() {
        User systemUser = userRepository.findByUsername(SecurityConstants.UserConstants.SYSTEM_USER)
                .orElse(userRepository.save(new User(SecurityConstants.UserConstants.SYSTEM_USER, saltedPasswordEncoder.encode(SecurityConstants.UserConstants.SYSTEM_PASSWORD, SecurityConstants.UserConstants.SYSTEM_USER), SecurityConstants.UserConstants.SYSTEM_EMAIL, new HashSet<>(), null)));
        systemUser.setAuthorities(authorityService.validRawAuthorities(systemUser,SecurityConstants.AuthorityConstants.ROLES_FOR_SUPER_ADMIN));
        return userRepository.save(systemUser);
    }

    @Override
    public User saveUser(User user) {
        return BendOptional.ofNullable(userRepository.save(user))
                .mustTrue(Objects::nonNull)
                .get();
    }

    @Override
    public User saveUser(String username, String email, String password, String... authorities) {
        return BendOptional.ofNullable(SecurityUtil.loggedInUser())
                .ifNotPresentThenConsume(this::systemUser)
                .map(systemUser->userRepository.save(new User(username, saltedPasswordEncoder.encode(password, username),email, authorityService.validRawAuthorities(systemUser, authorities), systemUser))).get();
    }
}
