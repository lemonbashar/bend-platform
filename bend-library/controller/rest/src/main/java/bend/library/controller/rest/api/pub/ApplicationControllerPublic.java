package bend.library.controller.rest.api.pub;

import bend.framework.base.util.BendOptional;
import bend.framework.properties.springproperties.SpringProperties;
import bend.library.controller.rest.constants.RestApiProvider;
import bend.library.controller.util.ResponseType;
import bend.library.controller.util.ResponseUtil;
import bend.library.data.ApplicationData;
import bend.library.data.Licence;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(RestApiProvider.ApplicationApi.APPLICATION_PUBLIC_ROOT_API)
public class ApplicationControllerPublic {

    private final @NonNull SpringProperties properties;
    @Value("${server.port}")
    private int port;

    @GetMapping
    public ResponseEntity<ApplicationData> application() {
        return BendOptional.of(new ApplicationData(properties.getSettings().getGeneral().getName(), port))
                .map(ResponseUtil::of).get().response(ResponseType::get);
    }

    @GetMapping(RestApiProvider.ApplicationApi.LICENCE)
    public ResponseEntity<Licence> licence() {
        return ResponseUtil.of(new Licence("No Licence Available")).response(ResponseType::get);
    }
}
