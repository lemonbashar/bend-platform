package bend.library.controller.rest.constants;


import bend.library.config.constants.APiConstants;

public class RestApiProvider {
    public static String build(String... urls) {
        StringBuilder builder = new StringBuilder(urls[0]);
        for (int i = 1; i < urls.length; i++)
            builder.append(urls[i]);
        return builder.toString();
    }

    public static final class ApplicationApi {
        public static final String APPLICATION_ROOT_API = APiConstants.PUBLIC_ROOT + "/application";
        public static final String NAME = APPLICATION_ROOT_API + "/name";
        public static final String LICENCE = APPLICATION_ROOT_API + "/licence";
    }

    public static final class AccountApi {
        public static final String ACCOUNT_ROOT_API = APiConstants.PRIVATE_ROOT + "/account";
        public static final String CURRENT_ACCOUNT_INFO = "/current-account";
    }
}
