package bend.library.controller.rest.api;

import bend.library.config.security.util.SecurityUtil;
import bend.library.controller.rest.constants.RestApiProvider;
import bend.library.controller.util.ResponseType;
import bend.library.controller.util.ResponseUtil;
import bend.library.data.AccountInfo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(RestApiProvider.AccountApi.ACCOUNT_ROOT_API)
public class AccountController {
    @GetMapping(RestApiProvider.AccountApi.CURRENT_ACCOUNT_INFO)
    public ResponseEntity<AccountInfo> currentAccount() {
        return ResponseUtil.of(SecurityUtil.accountInfo()).response(ResponseType::get);
    }
}
