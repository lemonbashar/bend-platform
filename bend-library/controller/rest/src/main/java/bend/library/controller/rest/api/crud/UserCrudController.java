package bend.library.controller.rest.api.crud;

import bend.library.controller.CrudController;
import bend.library.controller.rest.constants.RestApiProvider;
import bend.library.data.crud.BaseCrudeViewData;
import bend.library.data.response.IBendResponse;
import bend.library.data.response.IDataResponse;
import bend.library.data.response.impl.DataResponse;
import bend.library.data.response.impl.PageableDataResponse;
import bend.library.domain.data.UserCrudData;
import bend.library.domain.entity.User;
import bend.library.domain.service.UserCrudService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.math.BigInteger;
import java.util.List;

@RestController
@RequestMapping(RestApiProvider.UserApi.USER_PRIVATE_ROOT_API)
public class UserCrudController extends CrudController<UserCrudData, User> {

    @Autowired
    public UserCrudController(@NonNull UserCrudService userCrudService) {
        super(userCrudService);
    }

    @PreAuthorize("@securityService.isSuperAdmin() || user.username == principal.username")
    @Override
    public ResponseEntity<? extends IBendResponse> update(@RequestBody @Valid User user) {
        return super.update(user);
    }

    @SuppressWarnings("unchecked")
    @PostAuthorize("@securityService.isSuperAdmin() || returnObject.body.data.username == principal.username")
    @Override
    public ResponseEntity<DataResponse<UserCrudData>> findOne(@PathVariable BigInteger id) {
        return (ResponseEntity<DataResponse<UserCrudData>>) super.findOne(id);
    }

    @PreAuthorize("@securityService.isSuperAdmin()")
    @Override
    public ResponseEntity<PageableDataResponse<List<BaseCrudeViewData>>> findAll(Pageable pageable) {
        return super.findAll(pageable);
    }

    @PreAuthorize("@securityService.isSuperAdmin()")
    @Override
    public ResponseEntity<? extends IBendResponse> delete(@PathVariable BigInteger id) {
        return super.delete(id);
    }
}
