package bend.library.config.security.filter;

import org.springframework.web.filter.OncePerRequestFilter;

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
public abstract class AbstractFilter extends OncePerRequestFilter {
    public static String findHeaderValue(ServletRequest servletRequest, String headerName) {
        return findHeaderValue((HttpServletRequest) servletRequest, headerName);
    }

    public static String findHeaderValue(HttpServletRequest httpServletRequest, String headerName) {
        return httpServletRequest.getHeader(headerName);
    }

    /**
     * At client-end it will found on error.text
     *
     * @param errorMessage The message to send as error.text
     * @param request      Servlet Request
     * @param response     Servlet response
     * @throws IOException      For servlet filter level error, while acquire printWriter
     * @throws ServletException for dispatcher level error while include
     */
    protected void responseError(String errorMessage, ServletRequest request, ServletResponse response) throws IOException, ServletException {
        PrintWriter printWriter = response.getWriter();
        printWriter.println(errorMessage);
        printWriter.close();
        request.getRequestDispatcher(((HttpServletRequest) request).getRequestURI()).include(request, response);
    }
}
