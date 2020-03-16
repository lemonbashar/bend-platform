package bend.library.annotation.prepersist;

import bend.library.config.constants.SpringElConstants;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Mark the entity to automatically set create by and create date by application while create
 *
 * @author lemon
 * 3/10/2020
 * khairul@impelitsolutions.com
 */

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface AutoCreate {
    /**
     * It's the SPEL,, which is used to detect that the Annotation is applicable for
     * current user or not.<br/>
     * EXAMPLE: SPEL: @securityService.hasAnyAuthority('ROLE_ADMIN','ROLE_MANAGER')
     *
     * @return True if annotation is applicable otherwise false.
     */
    String isApplicable() default SpringElConstants.TRUE;

    /**
     * An SPEL Expression for finding create-by user-id.<br/>
     * Example: SPEL: @userService.loggedInUserIdOrSystemUserId()
     *
     * @return SPEL of any user id
     */
    String createBy() default SpringElConstants.User.LOGGED_IN_USER_ID_OR_SYSTEM_USER_ID;
}
