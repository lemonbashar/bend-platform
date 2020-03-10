package bend.library.config.constants;

public final class SpringElConstants {
    public static final String TRUE = "true";
    public static final String FALSE = "false";

    public static final class User {
        public static final String LOGGED_IN_USER_ID_OR_SYSTEM_USER_ID = "@userService.loggedInUserIdOrSystemUserId()";
    }

    public static final class DateTime {
        public static final String NOW = "java.time.LocalDate.now()";
    }
}
