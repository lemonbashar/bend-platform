package bend.library.constant;

public final class SpringElConstants {
    public static final String TRUE = "true";
    public static final String FALSE = "false";
    public static final String SPEL_PREFIX = "SPEL:";

    public static final class User {
        public static final String LOGGED_IN_USER_ID_OR_SYSTEM_USER_ID = "@userService.loggedInUserIdOrSystemUserId()";
        public static final String WHEN_USER_IS_NOT_SYSTEM = "!#model.getUsername().equals('system')";
    }

    public static final class DateTime {
        public static final String NOW = "java.time.LocalDate.now()";
    }

    public static final class Security {
        public static final String IS_ANY_ADMIN = "@securityService.isAnyAdmin()";
        public static final String IS_SUPER_ADMIN = "@securityService.isSuperAdmin()";
        public static final String IS_SETTINGS_ADMIN = "@securityService.isSettingsAdmin()";
        public static final String IS_USER_ADMIN = "@securityService.isUserAdmin()";
        public static final String IS_AUTHENTICATED = "@securityService.isAuthenticated()";
        public static final String WHEN_CREATE_BY_DEFAULT_FALSE_IF_SETTINGS_ADMIN_TRUE__WHEN_UPDATE_IF_SETTINGS_ADMIN_THEN_DEFAULT_VALUE_OTHERWISE_FALSE = "#model.getId()==null?@securityService.isSettingsAdmin():(@securityService.isSettingsAdmin()?#model.isActive():false)";
    }

    public static final class Entity {
        public static final String WHEN_CREATE = "#model.getId()==null";
    }
}
