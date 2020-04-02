package bend.library.constant;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/14/2020
 */
public final class APiConstants {
    public static final String ACTUATOR_PATH = "/actuator";
    private static final String ROOT = "";
    public static final String PUBLIC_ROOT = ROOT + "/public";
    public static final String PRIVATE_ROOT = ROOT + "/private";
    public static final String PRIVATE_ADMIN_ROOT = PRIVATE_ROOT + "/admin";

    public static final class UtilityApi {
        public static final String ACCESS_DENIED_URL = PUBLIC_ROOT + "/access-denied";
    }

    public static class ParameterApi {
        public static final String ONE_PARAM_ID = "/{id}";
    }
}
