package bend.library.config.security.jwt.service;

import bend.library.config.PropertiesConfig;
import bend.library.config.constants.ProfileConstants;
import bend.library.config.constants.SecurityConstants;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.config.security.data.AccountInfo;
import bend.library.config.security.data.CustomUserDetails;
import bend.library.config.security.data.LoginInfo;
import bend.library.config.security.jwt.JwtSecurityConfig;
import bend.library.config.security.jwt.jwt.TokenProvider;
import bend.library.config.security.service.AuthenticationService;
import bend.library.config.security.service.CustomUserDetailsService;
import bend.library.config.security.service.SaltedPasswordEncoder;
import bend.library.config.security.util.SecurityUtil;
import bend.library.domain.DomainConfig;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import java.math.BigInteger;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@Tag(ProfileConstants.TestInclude.NON_DATABASE_HIT)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, SecurityConfig.class, JwtSecurityConfig.class, DomainConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@Configuration
public class JwtAuthenticationServiceTest {
    private AuthenticationService authenticationService;
    @Autowired
    private SaltedPasswordEncoder saltedPasswordEncoder;
    @Autowired
    private TokenProvider tokenProvider;

    CustomUserDetailsService customUserDetailsService;

    private static final String USERNAME = "lemon";
    private static final String PASSWORD = "lemon1234";

    private LoginInfo loginInfo;

    public JwtAuthenticationServiceTest beanWire(SaltedPasswordEncoder saltedPasswordEncoder, TokenProvider tokenProvider) {
        this.saltedPasswordEncoder = saltedPasswordEncoder;
        this.tokenProvider = tokenProvider;
        return this;
    }

    @BeforeEach
    public void beforeEach() {
        this.loginInfo = new LoginInfo();
        this.loginInfo.setUsername(USERNAME);
        this.loginInfo.setRememberMe(true);
        this.loginInfo.setPassword(PASSWORD);
        this.customUserDetailsService = mock(CustomUserDetailsService.class);
        this.authenticationService = new JwtAuthenticationService(new JwtAuthenticationManager(tokenProvider, customUserDetailsService, saltedPasswordEncoder));
        when(customUserDetailsService.findUserDetails(USERNAME))
                .thenReturn(new CustomUserDetails(BigInteger.TEN, "lemon", saltedPasswordEncoder.encode(PASSWORD, USERNAME), SecurityConstants.AuthorityConstants.ROLES_FOR_SUPER_ADMIN));
        when(customUserDetailsService.loadUserByUsername(USERNAME))
                .thenReturn(new CustomUserDetails(BigInteger.TEN, "lemon", saltedPasswordEncoder.encode(PASSWORD, USERNAME), SecurityConstants.AuthorityConstants.ROLES_FOR_SUPER_ADMIN));
    }


    @Test
    public void authenticate() {
        ResponseEntity<AccountInfo> infoResponseEntity = authenticateCurrent();
        assertTrue(SecurityUtil.isAuthenticated());
        assertTrue(SecurityUtil.hasAnyAuthority(SecurityConstants.AuthorityConstants.SingleAuth.ROLE_ADMIN));
        assertEquals(SecurityUtil.loggedInUserId(), BigInteger.TEN);
    }

    public ResponseEntity<AccountInfo> authenticateCurrent() {
        return this.authenticationService.authenticate(loginInfo);
    }
}