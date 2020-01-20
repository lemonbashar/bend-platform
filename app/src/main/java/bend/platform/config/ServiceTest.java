package bend.platform.config;

import bend.platform.library.Inf;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 1/21/2020
 */

@Service
public class ServiceTest {
    @Autowired
    private Inf inf;

    @Scheduled(fixedRate = 1000, initialDelay = 500)
    public void say() {
        inf.say();
    }
}
