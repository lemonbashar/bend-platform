package bend.library.config.database.filter;

import bend.library.config.security.filter.AbstractFilter;
import bend.library.config.security.registry.enumeretion.RegistryDetectionType;
import bend.library.config.security.util.SecurityUtil;
import bend.library.constant.RouteConstants;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


/**
 * While we have routing datasource model, we have to decide at first which datasource we gonna to use and for this
 * purpose we need to detect the database first. and here we gonna use some different kinds of datasource detecting methods.
 * one of them is by username.
 * These are total detecting method we gonna use.
 *
 * <ul>
 *     <li>{@link RegistryDetectionType#CLUSTER_KEY} BY_USERNAME</li>
 *     <li>BY_ORGANIZATION_NAME</li>
 * </ul>
 */
public class RoutingDataSourceFilter extends AbstractFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        final String registryDetectionValue = findHeaderValue(request, RouteConstants.HEADER_REGISTRY_DETECTION_VALUE);
        final String registryDetectionType = findHeaderValue(request, RouteConstants.HEADER_REGISTRY_DETECTION_TYPE);
        if (registryDetectionValue != null && registryDetectionType != null) {
            SecurityUtil.updateRegistryDetection(RegistryDetectionType.valueOf(registryDetectionType), registryDetectionValue);
        }
        chain.doFilter(request, response);
    }
}
