package bend.library.config.security.filter;

import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */
public abstract class AbstractFilter extends GenericFilterBean {
    public static String findHeaderValue(ServletRequest servletRequest, String headerName) {
        return findHeaderValue((HttpServletRequest) servletRequest, headerName);
    }

    public static String findHeaderValue(HttpServletRequest httpServletRequest, String headerName) {
        return httpServletRequest.getHeader(headerName);
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        doFilterInternal(request, response, chain);
    }

    protected abstract void doFilterInternal(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException;

    protected void responseError(String errorMessage, ServletRequest request, ServletResponse response) throws IOException, ServletException {
        PrintWriter printWriter=response.getWriter();
        printWriter.println(errorMessage);
        printWriter.close();
        request.getRequestDispatcher(((HttpServletRequest)request).getRequestURI()).include(request, response);
    }
}
