package bend.library.core.prepersist;

import bend.library.config.PropertiesConfig;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.exception.PrePersistException;
import bend.library.config.security.jwt.JwtSecurityConfig;
import bend.library.constant.ProfileConstants;
import bend.library.domain.DomainConfig;
import bend.library.domain.repositories.UserRepository;
import org.apache.catalina.security.SecurityConfig;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

@Tag(ProfileConstants.TestInclude.RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, SecurityConfig.class,
        bend.library.config.security.SecurityConfig.class, JwtSecurityConfig.class,
        DomainConfig.class, PrePersistConfiguration.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
class PrePersistAwareTest2 {
    @Autowired
    private UserRepository userRepository;

    @Test
    @Order(6)
    void testForSystemUpdate() {
        Assertions.assertThrows(PrePersistException.class, () -> this.userRepository.findByUsername("system").ifPresent(this.userRepository::save));
    }
}