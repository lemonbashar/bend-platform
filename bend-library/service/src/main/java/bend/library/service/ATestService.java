package bend.library.service;

import bend.framework.logging.Log;
import org.springframework.stereotype.Service;

/**
 * @author lemon
 * @date 2/6/2020
 * @email khairul@impelitsolutions.com
 */
@Service
public class ATestService {
    private final Log log=Log.of(ATestService.class);

    public void test() {
        log.info("HELLO TEST");
    }
}
