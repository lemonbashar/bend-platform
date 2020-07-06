package bend.library.domain.place.repositories;

import bend.library.config.PropertiesConfig;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.constant.ProfileConstants;
import bend.library.domain.DomainConfig;
import bend.library.domain.place.PlaceConfig;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import java.math.BigInteger;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@Tag(ProfileConstants.TestInclude.NOT_RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, PlaceConfig.class, DomainConfig.class, SecurityConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class PlaceRepositoryTest {
    @Autowired
    private PlaceRepository placeRepository;

    @Test
    public void findPlaceTest() {
        assertNotNull(placeRepository.findById(BigInteger.ONE));
    }

}