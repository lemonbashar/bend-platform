package bend.library.config.security.service;

import bend.library.config.PropertiesConfig;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.security.SecurityConfig;
import bend.library.config.security.data.CustomUserDetails;
import bend.library.domain.DomainConfig;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import static org.junit.jupiter.api.Assertions.*;

@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class, RdbmsJpaConfig.class, SecurityConfig.class, DomainConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class CustomUserDetailsServiceTest {
    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Test
    public void findUserDetails() {
        CustomUserDetails customUserDetails = customUserDetailsService.findUserDetails("lemon");
        assertEquals("lemon", customUserDetails.getUsername());
    }
}