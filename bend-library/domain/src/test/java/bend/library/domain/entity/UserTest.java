package bend.library.domain.entity;

import bend.library.config.PropertiesConfig;
import bend.library.config.constants.ProfileConstants;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.domain.DomainConfig;
import bend.library.domain.cluster.ClusterDomainConfig;
import bend.library.domain.repositories.UserRepository;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.fail;

@Tag(ProfileConstants.TestInclude.DATABASE_HIT)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class,RdbmsJpaConfig.class,DomainConfig.class, ClusterDomainConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class UserTest {

    private static final String USERNAME = "test-username";
    @Autowired
    private UserRepository userRepository;

    @Test
    public void save() {
        Optional<User> optionalUser = userRepository.findByUsername(USERNAME);
        optionalUser.ifPresent(user -> userRepository.deleteById(user.getId()));

        User user=new User();
        user.setUsername(USERNAME);
        user.setEmail("test-mail");
        user.setActive(true);

        userRepository.save(user);
        if(userRepository.findByUsername(USERNAME).isEmpty())
            fail();
    }

}