package bend.library.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE, classes = {ServiceConfiguration.class})
class ATestServiceTest {
    @Autowired
    private ATestService aTestService;

    @Test
    void test() {
        aTestService.test();
    }
}