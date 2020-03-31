package bend.gateway.config;

import com.netflix.client.config.IClientConfig;
import com.netflix.loadbalancer.IPing;
import com.netflix.loadbalancer.PingUrl;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RibbonConfig {

    //@Bean
    public IPing ribbonPing(final IClientConfig config) {
        return new PingUrl(false, "/health");
    }
}
