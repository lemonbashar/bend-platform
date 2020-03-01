package bend.library.config.security.jwt.constant;

public final class JwtConstants {
    public static final String AUTHORIZATION_HEADER = "Authorization";
    public static final String BEARER = "Bearer ";
    public static final String AUTHORITIES_KEY = "auth";
    public static final String USER_IDENTITY_KEY = "uid";
    public static final String USER_NAME_KEY = "uname";

    public static String bearerWith(String token) {
        return BEARER+token;
    }
}
