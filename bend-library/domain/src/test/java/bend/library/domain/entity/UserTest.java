package bend.library.domain.entity;

import bend.library.config.PropertiesConfig;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.domain.DomainConfig;
import bend.library.domain.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import java.time.LocalDate;

@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class,RdbmsJpaConfig.class,DomainConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
public class UserTest {

    private static final String USERNAME = "test-username";
    @Autowired
    private UserRepository userRepository;

    @Test
    public void save() {
        try {
            User user=new User();
            user.setUsername(USERNAME);
            user.setEmail("test-mail");
            user.setActive(true);
            user.setCreateDate(LocalDate.now());

            userRepository.save(user);
        } catch (Exception e) {
            if(userRepository.findByUsername(USERNAME)==null)
            throw e;
        }
    }

}