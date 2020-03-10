package bend.library.config.security.jwt.filter.jwt;

import bend.library.config.PropertiesConfig;
import bend.library.config.constants.ProfileConstants;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.config.security.config.CommonSecurityConfig;
import bend.library.config.security.data.AccountInfo;
import bend.library.config.security.jwt.JwtSecurityConfig;
import bend.library.config.security.jwt.constant.JwtConstants;
import bend.library.config.security.jwt.data.JwtAccountInfo;
import bend.library.config.security.jwt.jwt.TokenProvider;
import bend.library.config.security.jwt.service.JwtAuthenticationServiceTest;
import bend.library.config.security.service.SaltedPasswordEncoder;
import bend.library.controller.WebConfigurer;
import bend.library.controller.rest.api.AccountControllerRest;
import bend.library.controller.rest.constants.RestApiProvider;
import bend.library.domain.DomainConfig;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Tag(ProfileConstants.TestInclude.NON_DATABASE_HIT)
@ActiveProfiles(profiles = {"test"})
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {WebConfigurer.class, JwtSecurityConfig.class, CommonSecurityConfig.class, PropertiesConfig.class, RdbmsJpaConfig.class, SecurityConfig.class, DomainConfig.class, AccountControllerRest.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
public class JwtAuthenticationFilterTest {
    @Autowired
    private TokenProvider tokenProvider;
    @Autowired
    private SaltedPasswordEncoder saltedPasswordEncoder;
    @Autowired
    private JwtAuthenticationServiceTest jwtAuthenticationServiceTest;
    @Autowired
    private MockMvc mockMvc;

    private ObjectMapper objectMapper = new ObjectMapper();

    @BeforeEach
    public void setUp() {
        this.jwtAuthenticationServiceTest.beanWire(saltedPasswordEncoder, tokenProvider).beforeEach();
    }

    @Test
    void testJWTFilter() throws Exception {
        ResponseEntity<AccountInfo> accountInfoEntity = jwtAuthenticationServiceTest.authenticateCurrent();
        JwtAccountInfo jwtAccountInfo = (JwtAccountInfo) accountInfoEntity.getBody();
        assertNotNull(jwtAccountInfo);
        assertNotNull(jwtAccountInfo.getToken());
        MvcResult mvcResult = mockMvc.perform(
                get(RestApiProvider.build(RestApiProvider.AccountApi.ACCOUNT_ROOT_API, RestApiProvider.AccountApi.CURRENT_ACCOUNT_INFO))
                        .accept(MediaType.APPLICATION_JSON_VALUE).header(JwtConstants.AUTHORIZATION_HEADER, JwtConstants.bearerWith(jwtAccountInfo.getToken()))
        ).andDo(print()).andExpect(status().isOk()).andReturn();
        AccountInfo accountInfo = objectMapper.readValue(mvcResult.getResponse().getContentAsString(), AccountInfo.class);
        assertEquals(accountInfoEntity.getBody().getUsername(), accountInfo.getUsername());
    }

    @Test
    void testFailure() throws Exception {
        mockMvc.perform(
                get(RestApiProvider.build(RestApiProvider.AccountApi.ACCOUNT_ROOT_API, RestApiProvider.AccountApi.CURRENT_ACCOUNT_INFO))
                        .accept(MediaType.APPLICATION_JSON_VALUE)
        ).andDo(print()).andExpect(status().is(HttpStatus.FORBIDDEN.value()));
    }

}