package bend.library.service;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

/**
 * @author lemon
 * @date 2/6/2020
 * @email khairul@impelitsolutions.com
 */
@Log4j2
@Service
public class ATestService {

    public void test() {
        log.info("HELLO TEST");
    }
}
