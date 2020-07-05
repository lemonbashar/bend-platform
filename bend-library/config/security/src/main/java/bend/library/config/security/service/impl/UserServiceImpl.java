package bend.library.config.security.service.impl;

import bend.framework.base.util.BendOptional;
import bend.library.config.exception.DatabaseNotAppropriateException;
import bend.library.config.security.service.AuthorityService;
import bend.library.config.security.service.SaltedPasswordEncoder;
import bend.library.config.security.service.UserService;
import bend.library.config.security.util.SecurityUtil;
import bend.library.constant.SecurityConstants;
import bend.library.constant.jdbc.JdbcParam;
import bend.library.domain.entity.User;
import bend.library.domain.repositories.UserRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.HashSet;
import java.util.Set;

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
    private final @NonNull NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private static final String QUERY_FOR_USER_AUTHS = "SELECT dma.authority_name FROM db_main_bend_user dmbu\n" +
            "    INNER JOIN jt_db_main_bend_user_x_db_main_authority jdmbuxdma ON dmbu.id = jdmbuxdma.bend_user_id\n" +
            "    INNER JOIN db_main_authority dma ON jdmbuxdma.authority_name = dma.authority_name\n" +
            "WHERE dma.active_status IS TRUE AND dmbu.id=:userIdentity";

    @Override
    public BigInteger loggedInUserIdOrSystemUserId() {
        return BendOptional.ofNullable(SecurityUtil.loggedInUser())
                .ifNotPresentThenConsume(() -> new User(this.systemUserId())).get().getId();
    }

    @Override
    public BigInteger systemUserId() {
        return userRepository.findUserIdByUsernameOrEmailAndActiveIsTrue(SecurityConstants.UserConstants.SYSTEM_USER).orElseThrow(() -> new DatabaseNotAppropriateException("System User Must Active and pre-persisted"));
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User saveUser(String username, String email, String password, String... authorities) {
        return userRepository.save(new User(username, saltedPasswordEncoder.encode(password, username), email, authorityService.validRawAuthorities(authorities)));
    }

    @Override
    public Set<String> getAuthoritiesByUid(BigInteger userId) {
        return new HashSet<>(this.namedParameterJdbcTemplate.queryForList(QUERY_FOR_USER_AUTHS, JdbcParam.of("userIdentity", userId.intValue()).build(), String.class));
    }
}
