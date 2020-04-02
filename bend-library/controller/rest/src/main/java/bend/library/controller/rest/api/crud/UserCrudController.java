package bend.library.controller.rest.api.crud;

import bend.library.controller.CrudController;
import bend.library.controller.rest.constants.RestApiProvider;
import bend.library.domain.data.UserCrudData;
import bend.library.domain.entity.User;
import bend.library.domain.service.UserCrudService;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(RestApiProvider.UserApi.USER_PRIVATE_ROOT_API)
public class UserCrudController extends CrudController<UserCrudData, User> {

    @Autowired
    public UserCrudController(@NonNull UserCrudService userCrudService) {
        super(userCrudService);
    }
}
