package bend.library.config.constants;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/14/2020
 */
public final class SecurityConstants {
    public static final class AuthorityConstants {
        public static final String[] ROLES_FOR_ADMIN = {SingleAuth.ROLE_ADMIN, SingleAuth.ROLE_SETTINGS_ADMIN, SingleAuth.ROLE_SYSTEM_ADMIN};
        public static final String[] ROLES_FOR_SUPER_ADMIN = {SingleAuth.ROLE_ADMIN, SingleAuth.ROLE_SYSTEM_ADMIN};

        /**
         * Beside the {@link AuthorityConstants} we declare the class {@link SingleAuth} thus
         * developer intentionally or unintentionally maximum time {@link AuthorityConstants}
         * which drive them for best practice.
         */
        public static final class SingleAuth {
            public static final String ROLE_ADMIN="ROLE_ADMIN";
            public static final String ROLE_SYSTEM_ADMIN="ROLE_SYSTEM_ADMIN";
            public static final String ROLE_SETTINGS_ADMIN="ROLE_SETTINGS_ADMIN";
            public static final String ROLE_USER="ROLE_USER";
        }

    }
    public static final class UserConstants {
        public static final String SYSTEM_USER="system";
        public static final String SYSTEM_PASSWORD="systempassword";
        public static final String SYSTEM_EMAIL = "system@nomail.com";
    }
}
