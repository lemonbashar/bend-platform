package bend.library.config.security.service;

import bend.library.config.PropertiesConfig;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.constant.ProfileConstants;
import bend.library.domain.DomainConfig;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

@Tag(ProfileConstants.TestInclude.RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, SecurityConfig.class, DomainConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
class SaltedPasswordEncoderTest {
    private static final String SYSTEM_USER_SALT = "system";
    private static final String SYSTEM_USER_PASSWORD = "system1234";
    @Autowired
    private SaltedPasswordEncoder saltedPasswordEncoder;

    @Test
    void encode() {
        System.out.println("SYSTEM:" + saltedPasswordEncoder.encode(SYSTEM_USER_PASSWORD, SYSTEM_USER_SALT));
        System.out.println("SYSTEM:" + saltedPasswordEncoder.encode("system123", SYSTEM_USER_SALT));
        System.out.println("ADMIN:" + saltedPasswordEncoder.encode("admin1234", "admin"));
        System.out.println("USER_ADMIN:" + saltedPasswordEncoder.encode("user.admin1234", "user.admin"));
        System.out.println("SETTINGS_ADMIN:" + saltedPasswordEncoder.encode("settings.admin1234", "settings.admin"));
    }


}