package bend.library.config.component;

import bend.library.config.PropertiesConfig;
import bend.library.config.service.EncoderService;
import bend.library.constant.ProfileConstants;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;

import static org.junit.jupiter.api.Assertions.assertEquals;

@Tag(ProfileConstants.TestInclude.RUN_FLUENTLY_WITHOUT_DB_DEPENDENCY)
@ActiveProfiles(profiles = "test")
@TestPropertySource(locations = "classpath:config/application-test.yml")
@SpringBootTest(classes = {PropertiesConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.MOCK)
class EncoderServiceTest {
    @Autowired
    private EncoderService encoderService;

    @Test
    void encode() {
        final String text = "lemon";
        final String encoded = encoderService.encode(text);
        System.out.println(encoded);
        final String decoded = encoderService.decode(encoded);
        System.out.println(decoded);
        assertEquals(text, decoded);
    }

    @Test
    void encodePassword() {
        System.out.println(this.encoderService.encode("lemon123!@#LEMON"));
    }
}