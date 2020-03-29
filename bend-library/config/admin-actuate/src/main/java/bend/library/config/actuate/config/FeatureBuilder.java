package bend.library.config.actuate.config;

import org.springframework.boot.actuate.metrics.MetricsEndpoint;

import java.util.ArrayList;
import java.util.List;

public class FeatureBuilder {
    public static List<MetricsEndpoint.MetricResponse> buildFullMetric(MetricsEndpoint metricsEndpoint) {
        MetricsEndpoint.ListNamesResponse response = metricsEndpoint.listNames();
        List<MetricsEndpoint.MetricResponse> list = new ArrayList<>();
        response.getNames().forEach(key -> {
            list.add(metricsEndpoint.metric(key, null));
        });
        return list;
    }

}
