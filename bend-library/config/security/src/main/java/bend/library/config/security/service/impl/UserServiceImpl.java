package bend.library.config.security.service.impl;

import bend.framework.base.util.BendOptional;
import bend.library.config.security.service.AuthorityService;
import bend.library.config.security.service.SaltedPasswordEncoder;
import bend.library.config.security.service.UserService;
import bend.library.config.security.util.SecurityUtil;
import bend.library.constant.SecurityConstants;
import bend.library.domain.data.UserCrudData;
import bend.library.domain.entity.User;
import bend.library.domain.repositories.UserRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.Objects;
import java.util.Optional;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
@Log4j2
@RequiredArgsConstructor
@Service("userService")
public class UserServiceImpl implements UserService {
    private static final String MESSAGE_OF_MISSING_SYSTEM_USER = "You Must need to save an user of named as system user and it's status must be active";
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
        Optional<User> systemUser = userRepository.findByUsernameOrEmailAndActiveIsTrue(SecurityConstants.UserConstants.SYSTEM_USER);
        if (systemUser.isEmpty()) {
            log.error(MESSAGE_OF_MISSING_SYSTEM_USER);
            throw new RuntimeException(MESSAGE_OF_MISSING_SYSTEM_USER);
        }
        return systemUser.get();
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User saveUser(String username, String email, String password, String... authorities) {
        return userRepository.save(new User(username, saltedPasswordEncoder.encode(password, username), email, authorityService.validRawAuthorities(authorities)));
    }
}
