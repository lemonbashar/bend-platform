package bend.library.config.actuate.overriden;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HealthActuate implements HealthIndicator {
    @Override
    public Health health() {
        int errCode = check();
        if (errCode != 0) {
            return Health.down().withDetail("Error-Code", errCode).build();
        }
        return Health.up().build();
    }

    private int check() {
        /*Check here*/
        return 0;
    }
}
