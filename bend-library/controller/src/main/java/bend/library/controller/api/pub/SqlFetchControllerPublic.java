package bend.library.controller.api.pub;

import bend.framework.base.util.BendOptional;
import bend.library.controller.ApiProvider;
import bend.library.controller.util.ResponseType;
import bend.library.controller.util.ResponseUtil;
import bend.library.core.sqlfetch.SqlFetchService;
import bend.library.data.fetch.fetch.FetchResponse;
import bend.library.data.fetch.fetch.SqlFetchDefinition;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;

@Log4j2
@RequiredArgsConstructor
@RestController
@RequestMapping(ApiProvider.SqlFetchApi.SQL_FETCH_PUBLIC_ROOT)
public class SqlFetchControllerPublic {
    private final @NonNull SqlFetchService sqlFetchService;

    @PostMapping
    public ResponseEntity<HashMap<String, FetchResponse>> fetch(@RequestBody @Valid final List<SqlFetchDefinition> sqlFetchDefinitions) {
        return BendOptional.of(new HashMap<String, FetchResponse>())
                .insideOperation(map -> sqlFetchDefinitions.forEach(sqlFetchDefinition -> map.put(sqlFetchDefinition.getKey(), this.sqlFetchService.fetch(sqlFetchDefinition))))
                .map(ResponseUtil::of).get().response(ResponseType::post);
    }
}
