package bend.library.config.security.jwt.filter.jwt;

import bend.library.config.security.filter.AbstractFilter;
import bend.library.config.security.jwt.jwt.TokenProvider;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

import static bend.library.config.security.jwt.constant.JwtConstants.AUTHORIZATION_HEADER;
import static bend.library.config.security.jwt.constant.JwtConstants.BEARER;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/13/2020
 */
@RequiredArgsConstructor
@Service
public class JwtAuthenticationFilter extends AbstractFilter {
    protected final @NonNull TokenProvider tokenProvider;


    @Override
    protected void doFilterInternal(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        String jwt = resolveToken(httpServletRequest);
        resolveJWT(request, response, chain, jwt);
    }

    protected void resolveJWT(ServletRequest request, ServletResponse response, FilterChain chain, String jwt) throws IOException, ServletException {
        if (StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) {
            Authentication authentication = tokenProvider.getAuthentication(jwt);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        chain.doFilter(request, response);
    }

    public static String resolveToken(HttpServletRequest httpServletRequest) {
        return resolveBearer(AbstractFilter.findHeaderValue(httpServletRequest, AUTHORIZATION_HEADER));
    }

    public static String resolveBearer(String headerWithBearer) {
        if (StringUtils.hasText(headerWithBearer) && headerWithBearer.startsWith(BEARER)) {
            return headerWithBearer.substring(BEARER.length());
        }
        return null;
    }
}
