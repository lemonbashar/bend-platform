package bend.library.core.sqlfetch;

import bend.library.config.PropertiesConfig;
import bend.library.constant.ProfileConstants;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.config.security.data.LoginInfo;
import bend.library.config.security.service.AuthenticationService;
import bend.library.data.fetch.fetch.FetchResponse;
import bend.library.data.fetch.fetch.SqlFetchDefinition;
import bend.library.domain.DomainConfig;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import static org.junit.jupiter.api.Assertions.*;
@Tag(ProfileConstants.TestInclude.RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, SqlFetchConfiguration.class, RdbmsJpaConfig.class, SecurityConfig.class, DomainConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
class SqlFetchServiceTest {
    @Autowired
    private SqlFetchService sqlFetchService;
    @Autowired
    private AuthenticationService authenticationService;

    @Test
    void fetchUserSqlRestrictedError() {
        authenticationService.authenticate(LoginInfo.builder().username("system").password("system1234").build());
        Assertions.assertThrows(SecurityException.class, ()->{
            SqlFetchDefinition fetchDefinition = SqlFetchDefinition.builder().alias("model")
                    .columns(new String[]{"model.username", "model.createBy", "model.id", "model.updateBy"})
                    .condition("model.id<10")
                    .orderBy("id ASC")
                    .build();
            fetchDefinition.setKey("User-Domain");
            fetchDefinition.setDomain("User");

            FetchResponse fetchResponse =  sqlFetchService.fetch(fetchDefinition);

            System.out.println(fetchResponse.getData());
        });
    }

    @Test
    void fetchUserSql() {
        authenticationService.authenticate(LoginInfo.builder().username("system").password("system1234").build());
        SqlFetchDefinition fetchDefinition = SqlFetchDefinition.builder().alias("model")
                .columns(new String[]{"model.username", "model.createDate", "model.id", "model.updateDate", "model.email"})
                .condition("model.id<10")
                .orderBy("id ASC")
                .build();
        fetchDefinition.setKey("User-Domain");
        fetchDefinition.setDomain("User");

        FetchResponse fetchResponse =  sqlFetchService.fetch(fetchDefinition);
        assertNotNull(fetchResponse);
        assertNotNull(fetchResponse.getData());
        System.out.println(fetchResponse.getData());
    }
}