package bend.library.controller.rest.api.pub;

import bend.framework.base.util.BendOptional;
import bend.library.config.security.data.AccountInfo;
import bend.library.config.security.service.UserService;
import bend.library.config.security.util.SecurityUtil;
import bend.library.controller.rest.constants.RestApiProvider;
import bend.library.controller.util.ResponseType;
import bend.library.controller.util.ResponseUtil;
import bend.library.data.UserData;
import bend.library.domain.entity.Authority;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.stream.Collectors;

@RestController
@RequestMapping(RestApiProvider.AccountApi.ACCOUNT_PUBLIC_ROOT_API)
public class AccountControllerRestPublic {
    private final UserService userService;

    public AccountControllerRestPublic(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(RestApiProvider.AccountApi.CREATE_ACCOUNT)
    public ResponseEntity<AccountInfo> createAccount(@RequestBody @Valid UserData userData) {
        return BendOptional.ofNullable(userService.saveUser(userData.getUsername(), userData.getEmail(), userData.getPassword(), userData.getAuthorities()))
                .map(user->new AccountInfo(user.getUsername(), user.getAuthorities().stream().map(Authority::getName).collect(Collectors.toSet()), false))
                .map(ResponseUtil::of).get().response(ResponseType::post);
    }
}
