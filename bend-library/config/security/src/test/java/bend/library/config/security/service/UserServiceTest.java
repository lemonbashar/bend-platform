package bend.library.config.security.service;

import bend.library.config.PropertiesConfig;
import bend.library.config.constants.ProfileConstants;
import bend.library.config.constants.SecurityConstants;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.domain.DomainConfig;
import bend.library.domain.entity.User;
import bend.library.domain.repositories.UserRepository;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import java.math.BigInteger;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@Tag(ProfileConstants.TestInclude.NOT_RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, SecurityConfig.class, DomainConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class UserServiceTest {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SaltedPasswordEncoder saltedPasswordEncoder;
    @Autowired
    private AuthorityService authorityService;

    public static UserServiceTest instance(UserService userService, UserRepository userRepository) {
        UserServiceTest userServiceTest = new UserServiceTest();
        userServiceTest.userRepository = userRepository;
        userServiceTest.userService = userService;
        return userServiceTest;
    }

    @Tag(ProfileConstants.TestInclude.RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
    @Test
    public void createAdmins() {
        this.userRepository.findByUsername("system.test").orElseGet(()->this.userService.saveUser(makeUser(new User("system.test", saltedPasswordEncoder.encode("system1234", "system"), "system.test@bendmail.com", authorityService.validRawAuthorities(SecurityConstants.AuthorityConstants.SingleAuth.ROLE_SYSTEM_ADMIN)))));
        this.userRepository.findByUsername("admin.test").orElseGet(()->this.userService.saveUser(makeUser(new User("admin.test", saltedPasswordEncoder.encode("admin1234", "admin"), "admin.test@bendmail.com", authorityService.validRawAuthorities(SecurityConstants.AuthorityConstants.SingleAuth.ROLE_ADMIN)))));
        this.userRepository.findByUsername("user.admin.test").orElseGet(()->this.userService.saveUser(makeUser(new User("user.admin.test", saltedPasswordEncoder.encode("user.admin1234", "user.admin"), "user.admin.test@bendmail.com", authorityService.validRawAuthorities(SecurityConstants.AuthorityConstants.SingleAuth.ROLE_USER_ADMIN)))));
        this.userRepository.findByUsername("settings.admin.test").orElseGet(()->this.userService.saveUser(makeUser(new User("settings.admin.test", saltedPasswordEncoder.encode("settings.admin1234", "settings.admin"), "settings.admin.test@bendmail.com", authorityService.validRawAuthorities(SecurityConstants.AuthorityConstants.SingleAuth.ROLE_SETTINGS_ADMIN)))));
    }

    private User makeUser(User user) {
        if(!user.getUsername().equals("system"))
            user.setCreateBy(new User(BigInteger.ONE));
        user.setCreateDate(LocalDate.now());
        user.setActive(true);
        return user;
    }
}