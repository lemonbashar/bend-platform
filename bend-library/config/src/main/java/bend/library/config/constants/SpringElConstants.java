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

    public static final class Security {
        public static final String IS_ANY_ADMIN = "@securityService.hasAnyAuthority('ROLE_ADMIN', 'ROLE_SYSTEM_ADMIN', 'ROLE_SETTINGS_ADMIN', 'ROLE_USER_ADMIN')";
        public static final String IS_ADMIN_OR_SYSTEM = "@securityService.hasAnyAuthority('ROLE_ADMIN', 'ROLE_SYSTEM_ADMIN')";
        public static final String HAS_SETTINGS_EDIT_PERMISSION = "@securityService.hasAnyAuthority('ROLE_ADMIN', 'ROLE_SYSTEM_ADMIN', 'ROLE_SETTINGS_ADMIN')";
        public static final String IS_AUTHENTICATED = "@securityService.isAuthenticated()";
    }
}
