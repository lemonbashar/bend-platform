package bend.library.config.security.jwt.filter.jwt;

import bend.library.config.PropertiesConfig;
import bend.library.config.WebConfigurer;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.config.security.config.CommonSecurityConfig;
import bend.library.config.security.jwt.JwtSecurityConfig;
import bend.library.config.security.jwt.constant.JwtConstants;
import bend.library.config.security.jwt.jwt.TokenProvider;
import bend.library.config.security.jwt.service.JwtAuthenticationServiceTest;
import bend.library.config.security.service.SaltedPasswordEncoder;
import bend.library.constant.ProfileConstants;
import bend.library.constant.SecurityConstants;
import bend.library.controller.rest.api.AccountControllerRest;
import bend.library.controller.rest.constants.RestApiProvider;
import bend.library.data.AccountInfo;
import bend.library.data.JwtAccountInfo;
import bend.library.data.UserData;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Tag(ProfileConstants.TestInclude.RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
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

    @Test
    void createAccount() throws Exception {
        UserData userData = new UserData("lemon", "", "lemon@mail.com", "lemon1234", SecurityConstants.AuthorityConstants.ROLES_FOR_ADMIN);
        MvcResult mvcResult = mockMvc.perform(post(RestApiProvider.build(RestApiProvider.AccountApi.ACCOUNT_PUBLIC_ROOT_API, RestApiProvider.AccountApi.CREATE_ACCOUNT)).contentType(MediaType.APPLICATION_JSON_VALUE).content(objectMapper.writeValueAsString(userData)).accept(MediaType.APPLICATION_JSON_VALUE))
                .andDo(print()).andExpect(status().is(HttpStatus.OK.value())).andReturn();
        AccountInfo accountInfo = objectMapper.readValue(mvcResult.getResponse().getContentAsString(), AccountInfo.class);
        System.out.println(accountInfo.toString());
    }

}