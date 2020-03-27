package bend.library.core.prepersist;

import bend.library.config.PropertiesConfig;
import bend.library.constant.ProfileConstants;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.data.LoginInfo;
import bend.library.config.security.jwt.JwtSecurityConfig;
import bend.library.config.security.service.AuthenticationService;
import bend.library.config.security.service.AuthorityService;
import bend.library.config.security.service.SaltedPasswordEncoder;
import bend.library.domain.DomainConfig;
import bend.library.domain.entity.User;
import bend.library.domain.repositories.UserRepository;
import org.apache.catalina.security.SecurityConfig;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@Tag(ProfileConstants.TestInclude.RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, SecurityConfig.class,
        bend.library.config.security.SecurityConfig.class, JwtSecurityConfig.class,
        DomainConfig.class, PrePersistConfiguration.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
class PrePersistAwareTest {
    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthorityService authorityService;
    @Autowired
    private SaltedPasswordEncoder saltedPasswordEncoder;

    private static final String systemUser = "system";
    private static final String systemPassword = "system1234";

    @Order(1)
    @Test
    void prePersistCheck() {
        this.authenticationService.authenticate(LoginInfo.builder().username(systemUser).password(systemPassword).build());
        Optional<User> user = this.userRepository.findByUsername("pre-persist-user");
        user.ifPresent(value -> userRepository.delete(value));
        User savedUser = userRepository.save(new User("pre-persist-user", saltedPasswordEncoder.encode("pre1234", "pre-persist-user"), "pre@bendmail.com", authorityService.validRawAuthorities("ROLE_PRE_PERSIST")));
    }

}