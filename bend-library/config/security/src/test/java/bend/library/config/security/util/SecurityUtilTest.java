package bend.library.config.security.util;

import bend.library.config.PropertiesConfig;
import bend.library.config.constants.ProfileConstants;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.config.security.data.AccountInfo;
import bend.library.config.security.data.LoginInfo;
import bend.library.config.security.jwt.JwtSecurityConfig;
import bend.library.config.security.service.AuthenticationService;
import bend.library.domain.DomainConfig;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import static org.junit.jupiter.api.Assertions.*;

@Tag(ProfileConstants.TestInclude.NON_DATABASE_HIT)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, SecurityConfig.class, DomainConfig.class, JwtSecurityConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
class SecurityUtilTest {
    @Autowired
    private AuthenticationService authenticationService;

    @Test
    public void testAccountInfo() {
        authenticationService.authenticate(LoginInfo.builder().username("system").password("system1234").build());
        AccountInfo accountInfo = SecurityUtil.accountInfo();
        assertEquals(accountInfo.getUsername(), "system");
    }
}