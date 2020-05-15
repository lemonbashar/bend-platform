package bend.library.config.security.jwt.filter.jwt;

import bend.library.config.security.filter.AbstractFilter;
import bend.library.config.security.jwt.data.AuthenticationWithRefreshedToken;
import bend.library.config.security.jwt.jwt.TokenProvider;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static bend.library.config.security.jwt.constant.JwtConstants.*;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/13/2020
 */
@RequiredArgsConstructor
@Service
public class JwtAuthenticationFilter extends AbstractFilter {
    protected final @NonNull TokenProvider tokenProvider;

    public static String resolveToken(HttpServletRequest httpServletRequest) {
        return resolveBearer(AbstractFilter.findHeaderValue(httpServletRequest, AUTHORIZATION_HEADER));
    }

    public static String resolveBearer(String headerWithBearer) {
        if (StringUtils.hasText(headerWithBearer) && headerWithBearer.startsWith(BEARER)) {
            return headerWithBearer.substring(BEARER.length());
        }
        return null;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        String jwt = resolveToken(httpServletRequest);
        resolveJWT(request, response, filterChain, jwt);
    }

    protected void resolveJWT(ServletRequest request, ServletResponse response, FilterChain chain, String jwt) throws IOException, ServletException {
        if (StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) {
            AuthenticationWithRefreshedToken authentication = tokenProvider.getAuthentication(jwt);
            ((HttpServletResponse) response).addHeader(REFRESHED_JSON_WEB_TOKEN, authentication.getRefreshedToken());
            SecurityContextHolder.getContext().setAuthentication(authentication.getAuthentication());
        }
        chain.doFilter(request, response);
    }
}
