package bend.library.config.actuate.overriden;

import bend.framework.properties.springproperties.SpringProperties;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.actuate.info.Info;
import org.springframework.boot.actuate.info.InfoContributor;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@Configuration
public class InfoActuate implements InfoContributor {
    private static final String SERVER_PORT = "Server-Port";
    private static final String APPLICATION_NAME = "Application-Name";
    private static final String BOOTSTRAP_APPLICATION_NAME = "Bootstrap-"+APPLICATION_NAME;
    private static final String APPLICATION_VERSION = "Application-Version";
    private final @NonNull SpringProperties properties;
    private final @NonNull Environment environment;

    @Override
    public void contribute(Info.Builder builder) {
        Map<String, String> additionalProperties = new HashMap<>();
        additionalProperties.put(SERVER_PORT, environment.getProperty("server.port"));
        additionalProperties.put(APPLICATION_NAME, properties.getSettings().getGeneral().getName());
        additionalProperties.put(BOOTSTRAP_APPLICATION_NAME, environment.getProperty("spring.application.name"));
        additionalProperties.put(APPLICATION_VERSION, properties.getSettings().getGeneral().getVersion());
        additionalProperties.put("Description",properties.getSettings().getGeneral().getDescription());
        builder.withDetail("Additional-Info", additionalProperties);
    }
}
