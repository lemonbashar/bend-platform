package bend.library.core.prepersist;

import bend.library.config.PropertiesConfig;
import bend.library.config.constants.ProfileConstants;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.jwt.JwtSecurityConfig;
import bend.library.config.security.service.AuthenticationService;
import bend.library.config.security.service.AuthorityService;
import bend.library.config.security.service.SaltedPasswordEncoder;
import bend.library.domain.DomainConfig;
import bend.library.domain.repositories.UserRepository;
import org.apache.catalina.security.SecurityConfig;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import static org.junit.jupiter.api.Assertions.assertFalse;

@Tag(ProfileConstants.TestInclude.NOT_RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, SecurityConfig.class,
        bend.library.config.security.SecurityConfig.class, JwtSecurityConfig.class,
        DomainConfig.class, PrePersistConfiguration.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
class PrePersistAwareTest4 {
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

    @Test
    void testForUpdateByAnonymous() throws InterruptedException {
        this.userRepository.findByUsername("admin").ifPresent(user->{
            user.setActive(true);
            this.userRepository.save(user);
        });
        this.userRepository.findByUsername("admin").ifPresent(user->assertFalse(user.isActive()));
    }

}