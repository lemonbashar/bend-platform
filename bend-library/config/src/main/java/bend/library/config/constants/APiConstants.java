package bend.library.config.constants;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/14/2020
 */
public final class APiConstants {
    public static final String PUBLIC_ROOT = "/api/public";
    public static final String PRIVATE_ROOT = "/api/private";
    public static final String PRIVATE_ADMIN_ROOT = "/api/admin";

    public static final class UtilityApi {
        public static final String ACCESS_DENIED_URL = PUBLIC_ROOT + "/access-denied";
    }
}
