package bend.library.config.security.jwt.jwt;

import bend.framework.properties.springproperties.SpringProperties;
import bend.library.config.security.data.CustomUserDetails;
import bend.library.config.security.data.LoginInfo;
import bend.library.config.security.jwt.constant.JwtConstants;
import bend.library.config.security.jwt.data.JwtLogoutInfo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.annotation.PostConstruct;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
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
@RequiredArgsConstructor
@Service
public class TokenProvider {
    protected Key key;
    protected long tokenValidityInMilliseconds;
    protected long tokenValidityInMillisecondsForRememberMe;

    protected final SpringProperties properties;

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
                .signWith(SignatureAlgorithm.HS512,key)
                .setExpiration(validity)
                .compact();
    }

    public Authentication getAuthentication(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(key)
                .parseClaimsJws(token)
                .getBody();

        String[] authorities = claims.get(AUTHORITIES_KEY).toString().split(",");

        CustomUserDetails principal = new CustomUserDetails(new BigInteger(claims.get(JwtConstants.USER_IDENTITY_KEY).toString()), claims.getSubject(), "", authorities);

        return new UsernamePasswordAuthenticationToken(principal, token, Stream.of(authorities).map(SimpleGrantedAuthority::new).collect(Collectors.toSet()));
    }

    public boolean validateToken(String authToken) {
        return parseValidate(authToken);
    }

    public boolean validateToken(String authToken, String remoteIpAddress) {
        return parseValidate(authToken);
    }

    protected boolean parseValidate(String authToken) {
        try {
            Jwts.parser().setSigningKey(key).parseClaimsJws(authToken);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
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
