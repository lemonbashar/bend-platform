package bend.library.config.database.filter;

import bend.library.config.constants.RouteConstants;
import bend.library.config.security.data.CustomUserDetails;
import bend.library.config.security.filter.AbstractFilter;
import bend.library.config.security.util.SecurityUtil;
import bend.library.domain.cluster.enumeretion.RegistryDetectionType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.io.IOException;
import java.util.Collection;
import java.util.HashSet;


/**
 * While we have routing datasource model, we have to decide at first which datasource we gonna to use and for this
 * purpose we need to detect the database first. and here we gonna use some different kinds of datasource detecting methods.
 * one of them is by username.
 * These are total detecting method we gonna use.
 *
 * <ul>
 *     <li>{@link RegistryDetectionType#BY_USERNAME} BY_USERNAME</li>
 *     <li>BY_ORGANIZATION_NAME</li>
 * </ul>
 */
public class RoutingDataSourceFilter extends AbstractFilter {
    @Override
    protected void doFilterInternal(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        final String registryDetectionValue = findHeaderValue(request, RouteConstants.HEADER_REGISTRY_DETECTION_VALUE);
        final String registryDetectionType = findHeaderValue(request, RouteConstants.HEADER_REGISTRY_DETECTION_TYPE);
        if(registryDetectionValue !=null && registryDetectionType != null) {
            final RegistryDetectionType detectionType = RegistryDetectionType.valueOf(registryDetectionType);
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            CustomUserDetails customUserDetails = null;
            Object credentials = null;
            Collection<? extends GrantedAuthority> grantedAuthorities = new HashSet<>();

            if(authentication != null && authentication.getPrincipal() !=null && authentication.getPrincipal() instanceof CustomUserDetails) {
                customUserDetails = (CustomUserDetails) authentication.getPrincipal();
                grantedAuthorities = authentication.getAuthorities();
                credentials = authentication.getCredentials();
            }
            else customUserDetails = new CustomUserDetails();
            customUserDetails.setRegistryDetectionType(registryDetectionType);
            customUserDetails.setRegistryDetectionValue(registryDetectionValue);
            SecurityContextHolder.clearContext();
            SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(customUserDetails, credentials, grantedAuthorities));
        }
        chain.doFilter(request, response);
    }
}
