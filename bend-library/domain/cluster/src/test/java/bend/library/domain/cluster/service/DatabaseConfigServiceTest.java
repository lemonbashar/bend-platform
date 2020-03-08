package bend.library.domain.cluster.service;

import bend.library.config.PropertiesConfig;
import bend.library.config.constants.ProfileConstants;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.config.security.service.UserService;
import bend.library.domain.DomainConfig;
import bend.library.domain.cluster.ClusterDomainConfig;
import bend.library.domain.entity.User;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

@Tag(ProfileConstants.TestInclude.NON_DATABASE_HIT)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, SecurityConfig.class, DomainConfig.class, ClusterDomainConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
class DatabaseConfigServiceTest {
    @Autowired
    private DatabaseConfigService databaseConfigService;
    @Autowired
    private UserService userService;

    @Test
    void createDatabaseConfig() {
        this.databaseConfigService.createDatabaseConfig(new User(userService.loggedInUserIdOrSystemUserId()), "bend-cluster-database", "bend-cluster-database-north", "bend-cluster-database-west");
    }

    @Test
    void testCreateDatabaseConfig() {
    }
}