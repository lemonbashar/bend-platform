package bend.library.domain.cluster.service;

import bend.library.config.PropertiesConfig;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.constant.ProfileConstants;
import bend.library.core.CoreConfig;
import bend.library.core.prepersist.PrePersistConfiguration;
import bend.library.domain.DomainConfig;
import bend.library.domain.cluster.ClusterDomainConfig;
import bend.library.domain.cluster.repositories.DatabaseConfigRepository;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

@Tag(ProfileConstants.TestInclude.RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
@ActiveProfiles(profiles = {ProfileConstants.TEST})
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, ClusterDomainConfig.class, CoreConfig.class, DomainConfig.class, PrePersistConfiguration.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
class DatabaseConfigServiceTest {
    @Autowired
    private DatabaseConfigService databaseConfigService;
    @Autowired
    private DatabaseConfigRepository databaseConfigRepository;

    @Test
    void createDatabaseConfig() {
        databaseConfigRepository.findBySchema("bend-cluster-database").ifPresent(databaseConfigRepository::delete);
        databaseConfigRepository.findBySchema("bend-cluster-database-north").ifPresent(databaseConfigRepository::delete);
        databaseConfigRepository.findBySchema("bend-cluster-database-west").ifPresent(databaseConfigRepository::delete);
        this.databaseConfigService.createDatabaseConfig("bend-cluster-database", "bend-cluster-database-north", "bend-cluster-database-west");
    }

    @Test
    void emptyTest() {
        System.out.println("EMPTY");
    }
}