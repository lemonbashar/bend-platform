package bend.library.config.actuate.config;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;

public class HealthCheck implements HealthIndicator {
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
