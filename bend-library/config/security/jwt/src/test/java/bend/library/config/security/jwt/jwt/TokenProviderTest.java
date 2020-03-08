package bend.library.config.security.jwt.jwt;

import bend.library.config.PropertiesConfig;
import bend.library.config.constants.ProfileConstants;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.config.security.config.CommonSecurityConfig;
import bend.library.config.security.config.WebConfigurer;
import bend.library.config.security.data.LoginInfo;
import bend.library.config.security.jwt.JwtSecurityConfig;
import bend.library.domain.DomainConfig;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import java.math.BigInteger;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.assertTrue;

@Tag(ProfileConstants.TestInclude.NON_DATABASE_HIT)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {WebConfigurer.class, JwtSecurityConfig.class, CommonSecurityConfig.class, PropertiesConfig.class, RdbmsJpaConfig.class, SecurityConfig.class, DomainConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class TokenProviderTest {
    @Autowired
    private TokenProvider tokenProvider;
    private LoginInfo loginInfo;

    @BeforeEach
    public void init() {
        loginInfo = new LoginInfo();
        loginInfo.setId(BigInteger.ONE);
        loginInfo.setUsername("lemon");
        loginInfo.setPassword("password");
        loginInfo.setRememberMe(true);
    }

    @Test
    public void createToken() {

        String token = tokenProvider.createToken(new UsernamePasswordAuthenticationToken("lemon", "password"), loginInfo);
        assertTrue(Objects.nonNull(token));
    }
}