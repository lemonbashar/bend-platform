package bend.library.config.constants;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/14/2020
 */
public final class APiConstants {
    public static final String ROOT = "/api";
    public static final String PUBLIC_ROOT = ROOT + "/public";
    public static final String PRIVATE_ROOT = ROOT + "/private";
    public static final String PRIVATE_ADMIN_ROOT = ROOT + "/admin";

    public static final class UtilityApi {
        public static final String ACCESS_DENIED_URL = PUBLIC_ROOT + "/access-denied";
    }
}
