package bend.library.config.actuate.config;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.boot.actuate.endpoint.annotation.Selector;
import org.springframework.boot.actuate.metrics.MetricsEndpoint;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@RequiredArgsConstructor
@Component
@Endpoint(id = "full-map", enableByDefault = false)
public class FullMapActuatorInformation {
    private static final String endpointStart = "/actuator/full-map/";
    private static final String PATH_METRICS = "metrics";
    private final @NonNull ApplicationContext application;
    private Map<String, Feature> features = new ConcurrentHashMap<>();

    @PostConstruct
    public void fullMapActuatorInformation() {
        features.put(PATH_METRICS, new Feature(endpointStart, PATH_METRICS));
    }

    @ReadOperation
    public Map<String, Feature> features() {
        return features;
    }

    @ReadOperation
    public List fullMap(@Selector String name) {
        Feature feature = features.get(name.toLowerCase());
        if (feature.getEnabled()) {
            switch (name.toLowerCase()) {
                case PATH_METRICS:
                    return FeatureBuilder.buildFullMetric(application.getBean(MetricsEndpoint.class));
            }
        }
        return new ArrayList();
    }

    /*@WriteOperation
    public void configureFeature(@Selector String name, Feature feature) {
        features.put(name, feature);
    }

    @DeleteOperation
    public void deleteFeature(@Selector String name) {
        features.remove(name);
    }*/

}
