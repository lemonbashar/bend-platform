package bend.library.controller.rest.api.pub;

import bend.library.config.PropertiesConfig;
import bend.library.config.WebConfigurer;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.config.security.config.CommonSecurityConfig;
import bend.library.config.security.jwt.JwtSecurityConfig;
import bend.library.constant.ProfileConstants;
import bend.library.constant.SecurityConstants;
import bend.library.controller.rest.RestConfig;
import bend.library.controller.rest.constants.RestApiProvider;
import bend.library.core.CoreConfig;
import bend.library.core.prepersist.PrePersistAspect;
import bend.library.core.prepersist.PrePersistConfiguration;
import bend.library.data.AccountInfo;
import bend.library.domain.DomainConfig;
import bend.library.domain.data.UserCrudData;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Tag(ProfileConstants.TestInclude.RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
@ActiveProfiles(profiles = {"test"})
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {WebConfigurer.class, JwtSecurityConfig.class, CommonSecurityConfig.class, PropertiesConfig.class, RdbmsJpaConfig.class, SecurityConfig.class, DomainConfig.class, RestConfig.class, CoreConfig.class, PrePersistConfiguration.class, PrePersistAspect.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
class AccountControllerPublicTest {
    @Autowired
    private MockMvc mockMvc;
    private ObjectMapper objectMapper = new ObjectMapper();

    @Test
    void createAccount() throws Exception {
        UserCrudData userData = new UserCrudData("lemon", "lemon@mail.com", "lemon1234", SecurityConstants.AuthorityConstants.ROLES_FOR_ADMIN);
        MvcResult mvcResult = mockMvc.perform(post(RestApiProvider.build(RestApiProvider.AccountApi.ACCOUNT_PUBLIC_ROOT_API, RestApiProvider.AccountApi.CREATE_ACCOUNT)).contentType(MediaType.APPLICATION_JSON_VALUE).content(objectMapper.writeValueAsString(userData)).accept(MediaType.APPLICATION_JSON_VALUE))
                .andDo(print()).andExpect(status().is(HttpStatus.OK.value())).andReturn();
        AccountInfo accountInfo = objectMapper.readValue(mvcResult.getResponse().getContentAsString(), AccountInfo.class);
        System.out.println(accountInfo.toString());
    }
}