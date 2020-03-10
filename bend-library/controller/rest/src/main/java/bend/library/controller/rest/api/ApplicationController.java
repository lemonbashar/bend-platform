package bend.library.controller.rest.api;

import bend.framework.base.util.BendOptional;
import bend.framework.properties.springproperties.SpringProperties;
import bend.library.controller.rest.constants.RestApiProvider;
import bend.library.controller.util.ResponseType;
import bend.library.controller.util.ResponseUtil;
import bend.library.data.ApplicationData;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RequiredArgsConstructor
@RestController
@RequestMapping(RestApiProvider.ApplicationApi.APPLICATION_ROOT_API)
public class ApplicationController {

    private final @NonNull SpringProperties properties;
    @Value("${server.port}")
    private int port;

    public ApplicationController(@NonNull SpringProperties properties) {
        this.properties = properties;
    }

    @GetMapping
    public ResponseEntity<ApplicationData> application() {
        return BendOptional.of(new ApplicationData(properties.getSettings().getGeneral().getName(), port))
                .map(ResponseUtil::of).get().response(ResponseType::get);
    }
}
