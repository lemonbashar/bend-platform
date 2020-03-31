package bend.library.config.security.jwt.jwt;

import bend.framework.properties.springproperties.SpringProperties;
import bend.library.config.security.data.CustomUserDetails;
import bend.library.config.security.jwt.constant.JwtConstants;
import bend.library.config.security.jwt.data.AuthenticationWithRefreshedToken;
import bend.library.config.security.registry.enumeretion.RegistryDetectionType;
import bend.library.data.JwtLogoutInfo;
import bend.library.data.LoginInfo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.annotation.PostConstruct;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static bend.library.config.security.jwt.constant.JwtConstants.AUTHORITIES_KEY;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/13/2020
 */
@SuppressWarnings("unused")
@Log4j2
@RequiredArgsConstructor
@Service
public class TokenProvider {
    protected final SpringProperties properties;
    protected Key key;
    protected long tokenValidityInMilliseconds;
    protected long tokenValidityInMillisecondsForRememberMe;

    @PostConstruct
    public void init() {
        byte[] keyBytes;
        String secret = properties.getSettings().getSecurity().getAuthentication().getJwt().getSecret();
        if (!StringUtils.isEmpty(secret))
            keyBytes = secret.getBytes(StandardCharsets.UTF_8);
        else {
            keyBytes = Decoders.BASE64.decode(properties.getSettings().getSecurity().getAuthentication().getJwt().getBase64Secret());
        }
        this.key = Keys.hmacShaKeyFor(keyBytes);
        this.tokenValidityInMilliseconds =
                1000 * properties.getSettings().getSecurity().getAuthentication().getJwt().getTokenValidityInSeconds();
        this.tokenValidityInMillisecondsForRememberMe =
                1000 * properties.getSettings().getSecurity().getAuthentication().getJwt()
                        .getTokenValidityInSecondsForRememberMe();
    }

    public String createToken(Authentication authentication, LoginInfo loginInfo) {
        String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));

        long now = (new Date()).getTime();
        Date validity;
        if (loginInfo.isRememberMe()) {
            validity = new Date(now + this.tokenValidityInMillisecondsForRememberMe);
        } else {
            validity = new Date(now + this.tokenValidityInMilliseconds);
        }

        return Jwts.builder()
                .setSubject(authentication.getName())
                .claim(AUTHORITIES_KEY, authorities)
                .claim(JwtConstants.USER_IDENTITY_KEY, loginInfo.getId())
                .claim(JwtConstants.IS_REMEMBER_ME, loginInfo.isRememberMe())
                .signWith(key)
                .setExpiration(validity)
                .compact();
    }

    public AuthenticationWithRefreshedToken getAuthentication(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key).build()
                .parseClaimsJws(token)
                .getBody();

        String[] authorities = claims.get(AUTHORITIES_KEY).toString().split(",");
        boolean isRememberMe = Boolean.parseBoolean(claims.get(JwtConstants.IS_REMEMBER_ME).toString());
        CustomUserDetails principal = new CustomUserDetails(new BigInteger(claims.get(JwtConstants.USER_IDENTITY_KEY).toString()), claims.getSubject(), "", authorities);
        principal.setRegistryDetectionType(RegistryDetectionType.BY_USERNAME);
        principal.setRegistryDetectionValue(principal.getUsername());
        AuthenticationWithRefreshedToken authenticationWithRefreshedToken = new AuthenticationWithRefreshedToken();
        authenticationWithRefreshedToken.setAuthentication(new UsernamePasswordAuthenticationToken(principal, token, Stream.of(authorities).map(SimpleGrantedAuthority::new).collect(Collectors.toSet())));
        authenticationWithRefreshedToken.setRefreshedToken(createToken(authenticationWithRefreshedToken.getAuthentication(), LoginInfo.builder().id(principal.getId()).rememberMe(isRememberMe).username(principal.getUsername()).build()));

        return authenticationWithRefreshedToken;
    }

    public boolean validateToken(String authToken) {
        return parseValidate(authToken);
    }

    public boolean validateToken(String authToken, String remoteIpAddress) {
        return parseValidate(authToken);
    }

    protected boolean parseValidate(String authToken) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(authToken);
            return true;
        } catch (Exception e) {
            log.error(e);
        }
        return false;
    }

    public void deleteToken(@NonNull String token) {
        /*TODO: DELETE WHILE WE STORE TOKEN ON TOKEN-STORAGE*/
    }

    public void logout(JwtLogoutInfo logoutInfo) {
        deleteToken(logoutInfo.getToken());
        SecurityContextHolder.clearContext();
    }
}
