package bend.library.config.constants;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/7/2020
 */
public final class ProfileConstants {
    public static final String TEST = "test";
    public static final String NOT_TEST = "!test";
    /**
     * Profile Development with no security applied
     */
    public static final String DEV = "dev";
    /**
     * Profile Production with Basic level security
     */
    public static final String PROD = "prod";
    /**
     * Profile Development with basic security
     */
    public static final String DEV_SECURE = "dev-secure";
    /**
     * Profile Production with extreme level security
     */
    public static final String PROD_SECURE = "prod-secure";
    public static final String API_DOCS = "api-docs";
    public static final String LIQUIBASE = "liquibase";

    public static final class TestInclude {
        /**
         * Indicate that tagged test will depends on database data, so we will test those data manually.
         */
        public static final String DATABASE_HIT = "db";

        /**
         * Indicate that tagged test won't depends on database data, so we can tested them using gradle tool.
         */
        public static final String NON_DATABASE_HIT = "ndb";
    }
}
