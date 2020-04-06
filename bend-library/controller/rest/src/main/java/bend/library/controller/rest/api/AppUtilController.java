package bend.library.controller.rest.api;

import bend.library.controller.rest.constants.RestApiProvider;
import bend.library.controller.util.ResponseType;
import bend.library.controller.util.ResponseUtil;
import bend.library.core.dao.AppUtilJdbcDao;
import bend.library.core.discovery.CheckFieldDiscoveryService;
import bend.library.data.fetch.FieldDefinition;
import bend.library.data.response.BendStatus;
import bend.library.data.response.impl.DataResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Log4j2
@RequiredArgsConstructor
@RestController
@RequestMapping(RestApiProvider.AppUtilApi.APP_UTIL_PRIVATE_ROOT_API)
public class AppUtilController {
    private static final String NOT_PERMIT = "NO PERMISSION TO EDIT";
    private static final String SUCCESS = "SUCCESSFULLY UPDATED";
    private static final String ERROR_OCCURRED = "ERROR OCCURRED DURING UPDATE";
    private final CheckFieldDiscoveryService checkFieldDiscoveryService;
    private final AppUtilJdbcDao appUtilJdbcDao;

    /**
     * If any one edit is failure, then rest of all will be roll-backed
     *
     * @param fieldDefinitions List of field definition
     * @return Result of the batch-update
     */
    @Transactional(rollbackFor = {Exception.class})
    @PostMapping(RestApiProvider.AppUtilApi.FIELD_EDIT)
    public ResponseEntity<DataResponse<Map<String, Object>>> fieldEdit(@RequestBody List<FieldDefinition> fieldDefinitions) throws Exception {
        Map<String, Object> feedback = new HashMap<>();
        HttpStatus httpStatus = HttpStatus.BAD_REQUEST;
        for (FieldDefinition fieldDefinition : fieldDefinitions) {
            try {
                if (checkFieldDiscoveryService.isDiscoverableForEdit(fieldDefinition)) {
                    appUtilJdbcDao.updateValue(fieldDefinition);
                    feedback.put(fieldDefinition.toString(), SUCCESS);
                    httpStatus = HttpStatus.OK;
                } else {
                    feedback.put(fieldDefinition.toString(), NOT_PERMIT);
                    throw new Exception(); /*ROLL BACK FOR EVERY UPDATE*/
                }
            } catch (Exception e) {
                feedback.put(fieldDefinition.toString(), ERROR_OCCURRED);
                log.error(e);
                throw new Exception(e);
            }
        }
        return ResponseUtil.of(new DataResponse<>(httpStatus.equals(HttpStatus.OK)? BendStatus.SUCCESS: BendStatus.FAILURE, feedback)).status(httpStatus).response(ResponseType::post);
    }
}
