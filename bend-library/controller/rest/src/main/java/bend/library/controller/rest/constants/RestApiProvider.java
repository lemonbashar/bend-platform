package bend.library.controller.rest.constants;


import bend.library.constant.APiConstants;
import lombok.Generated;
import lombok.Value;

public class RestApiProvider {
    public static final String[] NEED_TO_SET_DATA_SOURCE_ROUTE_IF_MATCH = {
            AccountApi.ACCOUNT_PUBLIC_ROOT_API + AccountApi.CREATE_ACCOUNT
    };

    public static String build(String... urls) {
        StringBuilder builder = new StringBuilder(urls[0]);
        for (int i = 1; i < urls.length; i++)
            builder.append(urls[i]);
        return builder.toString();
    }

    public static final class ApplicationApi {
        public static final String APPLICATION_PUBLIC_ROOT_API = APiConstants.PUBLIC_ROOT + "/application";
        public static final String LICENCE = "/licence";
    }

    public static final class AccountApi {
        public static final String ACCOUNT_ROOT_API = APiConstants.PRIVATE_ROOT + "/account";
        public static final String ACCOUNT_PUBLIC_ROOT_API = APiConstants.PUBLIC_ROOT + "/account";
        public static final String CURRENT_ACCOUNT_INFO = "/current-account";
        public static final String CREATE_ACCOUNT = "/create-account";
        public static final String LOGIN = "/login";
    }

    public static final class UserApi {
        public static final String USER_PRIVATE_ROOT_API = APiConstants.PRIVATE_ROOT + "/user";
        public static final String CURRENT_USER = "/current-user";
    }
}
