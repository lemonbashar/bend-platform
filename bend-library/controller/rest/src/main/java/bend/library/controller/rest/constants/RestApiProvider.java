package bend.library.controller.rest.constants;


import bend.library.config.constants.APiConstants;

public class RestApiProvider {
    public static String build(String... urls) {
        StringBuilder builder = new StringBuilder(urls[0]);
        for (int i = 1; i < urls.length; i++)
            builder.append(urls[i]);
        return builder.toString();
    }

    public static final class AccountApi {
        public static final String ACCOUNT_ROOT_API = APiConstants.PRIVATE_ROOT + "/account-controller";
        public static final String CURRENT_ACCOUNT_INFO = "/current-account";
    }
}
