package bend.library.controller.api.pub;

import bend.library.controller.ApiProvider;
import bend.library.controller.util.ResponseType;
import bend.library.controller.util.ResponseUtil;
import bend.library.core.dao.AppUtilJdbcDao;
import bend.library.core.discovery.CheckFieldDiscoveryService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RequiredArgsConstructor
@RestController
@RequestMapping(ApiProvider.AppUtilApi.APP_UTIL_PUBLIC_ROOT_API)
public class AppUtilControllerPublic {
    private final @NonNull CheckFieldDiscoveryService checkFieldDiscoveryService;
    private final @NonNull AppUtilJdbcDao appUtilJdbcDao;

    @SuppressWarnings("MVCPathVariableInspection")
    @GetMapping(ApiProvider.AppUtilApi.SINGLE_FIELD_EXISTENCE_CHECK)
    public ResponseEntity<Boolean> checkExistence(@PathVariable String table, @PathVariable String field, @PathVariable String value) {
        boolean exist = false;
        try {
            if (checkFieldDiscoveryService.isDiscoverableForExistence(table, field)) {
                exist = appUtilJdbcDao.isExistFieldValue(table, field, value);
            }
        } catch (Exception e) {
            log.error(e);
        }
        return ResponseUtil.of(exist).response(ResponseType::get);
    }
}
