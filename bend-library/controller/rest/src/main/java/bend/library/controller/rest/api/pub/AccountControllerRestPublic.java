package bend.library.controller.rest.api.pub;

import bend.framework.base.util.BendOptional;
import bend.library.config.security.registry.enumeretion.RegistryDetectionType;
import bend.library.config.security.service.AuthenticationService;
import bend.library.config.security.service.UserService;
import bend.library.config.security.util.SecurityUtil;
import bend.library.controller.rest.constants.RestApiProvider;
import bend.library.controller.util.ResponseType;
import bend.library.controller.util.ResponseUtil;
import bend.library.data.AccountInfo;
import bend.library.data.LoginInfo;
import bend.library.domain.data.UserCrudData;
import bend.library.domain.entity.Authority;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping(RestApiProvider.AccountApi.ACCOUNT_PUBLIC_ROOT_API)
public class AccountControllerRestPublic {
    private final @NonNull UserService userService;
    private final @NonNull AuthenticationService authenticationService;


    @PostMapping(RestApiProvider.AccountApi.CREATE_ACCOUNT)
    public ResponseEntity<AccountInfo> createAccount(@RequestBody @Valid final UserCrudData userData) {
        SecurityUtil.updateRegistryDetection(RegistryDetectionType.BY_USERNAME, userData.getUsername());
        return BendOptional.ofNullable(userService.saveUser(userData.getUsername(), userData.getEmail(), userData.getPassword(), userData.getAuthorities()))
                .map(user -> new AccountInfo(user.getUsername(), user.getAuthorities().stream().map(Authority::getName).collect(Collectors.toSet()), false))
                .map(ResponseUtil::of).get().response(ResponseType::post);
    }

    @PostMapping(RestApiProvider.AccountApi.LOGIN)
    public ResponseEntity<AccountInfo> login(@RequestBody @Valid final LoginInfo loginInfo) {
        return BendOptional.ofNullable(this.authenticationService.authenticate(loginInfo))
                .map(accountResp -> ResponseUtil.of(accountResp.getBody()).status(accountResp.getStatusCode()).header(accountResp.getHeaders())).get().response(ResponseType::get);
    }
}
