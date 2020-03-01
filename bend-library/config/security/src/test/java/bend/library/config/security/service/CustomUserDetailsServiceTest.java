package bend.library.config.security.service;

import bend.library.config.PropertiesConfig;
import bend.library.config.constants.ProfileConstants;
import bend.library.config.constants.SecurityConstants;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.config.security.data.CustomUserDetails;
import bend.library.domain.DomainConfig;
import bend.library.domain.entity.User;
import bend.library.domain.repositories.UserRepository;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import static org.junit.jupiter.api.Assertions.*;

@Tag(ProfileConstants.TestInclude.DATABASE_HIT)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, SecurityConfig.class, DomainConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class CustomUserDetailsServiceTest {
    @Autowired
    private CustomUserDetailsService customUserDetailsService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    private static final String USERNAME="lemonbashar";

    @Test
    public void findUserDetails() {
        if(userRepository.findByUsername(USERNAME).isEmpty()) {
            userService.saveUser(USERNAME, USERNAME+"@mail.com", "123456", SecurityConstants.AuthorityConstants.ROLES_FOR_ADMIN);
        }
        CustomUserDetails customUserDetails = customUserDetailsService.findUserDetails(USERNAME);
        assertEquals(USERNAME, customUserDetails.getUsername());
    }
}