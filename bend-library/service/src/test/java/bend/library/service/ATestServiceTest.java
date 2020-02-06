package bend.library.service;

import bend.framework.logging.Log;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE, classes = {ServiceConfiguration.class})
class ATestServiceTest {
    @Autowired
    private ATestService aTestService;
    private final Log log=Log.of(ATestServiceTest.class);

    @Test
    void test() {
        aTestService.test();
        log.debug("Hello Log4j2");
    }
}