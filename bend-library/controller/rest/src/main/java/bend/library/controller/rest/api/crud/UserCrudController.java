package bend.library.controller.rest.api.crud;

import bend.framework.base.util.BendOptional;
import bend.library.config.security.service.UserService;
import bend.library.config.security.util.SecurityUtil;
import bend.library.controller.CrudController;
import bend.library.controller.rest.constants.RestApiProvider;
import bend.library.controller.util.ResponseType;
import bend.library.controller.util.ResponseUtil;
import bend.library.data.crud.BaseCrudeViewData;
import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.response.BendStatus;
import bend.library.data.response.IBendResponse;
import bend.library.data.response.impl.BendResponse;
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
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.math.BigInteger;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping(RestApiProvider.UserApi.USER_PRIVATE_ROOT_API)
public class UserCrudController extends CrudController<UserCrudData, User> {
    private final UserService userService;

    @Autowired
    public UserCrudController(@NonNull UserCrudService userCrudService, UserService userService) {
        super(userCrudService);
        this.userService = userService;
    }

    @Override
    public ResponseEntity<? extends IBendResponse> save(@Valid User user) {
        return BendOptional.ofNullable(this.userService.saveUser(user))
                .map(usr->new BendResponse(Objects.isNull(usr) ? BendStatus.FAILURE : BendStatus.SUCCESS))
                .map(ResponseUtil::of).get().response(ResponseType::post);
    }

    @PreAuthorize("@securityService.isSuperAdmin() || user.username == principal.username")
    @Override
    public ResponseEntity<? extends IBendResponse> update(@RequestBody @Valid User user) {
        return this.save(user);
    }

    @SuppressWarnings("unchecked")
    @PostAuthorize("@securityService.isSuperAdmin() || returnObject.body.data.username == principal.username")
    @Override
    public ResponseEntity<DataResponse<UserCrudData>> findOne(@PathVariable BigInteger id) {
        return (ResponseEntity<DataResponse<UserCrudData>>) super.findOne(id);
    }

    @GetMapping("/by-username/{username}")
    @PostAuthorize("@securityService.isSuperAdmin() || returnObject.body.data.username == principal.username")
    public ResponseEntity<DataResponse<UserCrudData>> findByUsername(@PathVariable String username) {
        return getByUsername(username);
    }

    @GetMapping(RestApiProvider.UserApi.CURRENT_USER)
    @PostAuthorize("returnObject.body.data.username == principal.username")
    public ResponseEntity<DataResponse<UserCrudData>> findByCurrentUser() {
        return getByUsername(SecurityUtil.loggedInUsername());
    }

    private ResponseEntity<DataResponse<UserCrudData>> getByUsername(String username) {
        return BendOptional.ofNullable(((UserCrudService)this.baseCrudService).findByUsername(username))
                .map(fetched -> new DataResponse<>(Objects.isNull(fetched) ? BendStatus.FAILURE : BendStatus.SUCCESS, fetched))
                .map(ResponseUtil::of).get().response(ResponseType::get);
    }

    @PreAuthorize("@securityService.isSuperAdmin()")
    @Override
    public ResponseEntity<PageableDataResponse<List<BaseCrudeViewData>>> findAll(Pageable pageable) {
        return super.findAll(pageable);
    }

    @PreAuthorize("@securityService.isSuperAdmin()")
    @Override
    public ResponseEntity<PageableDataResponse<BaseFlexibleCrudeViewData>> findAllFlexible(Pageable pageable) {
        return super.findAllFlexible(pageable);
    }

    @PreAuthorize("@securityService.isSuperAdmin()")
    @Override
    public ResponseEntity<? extends IBendResponse> delete(@PathVariable BigInteger id) {
        return super.delete(id);
    }
}
