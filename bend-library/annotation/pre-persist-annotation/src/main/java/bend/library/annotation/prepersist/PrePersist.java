package bend.library.annotation.prepersist;

import bend.library.constant.SpringElConstants;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Mark the application to do task just before persist in the database.
 *
 * @author lemon
 * 3/10/2020
 * khairul@impelitsolutions.com
 */

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface PrePersist {
    /**
     * It's the SPEL,, which is used to detect that the Annotation is applicable for
     * current user or not.<br/>
     * EXAMPLE: SPEL: @securityService.hasAnyAuthority('ROLE_ADMIN','ROLE_MANAGER')
     *
     * @return True if annotation is applicable otherwise false.
     */
    String isApplicable() default SpringElConstants.TRUE;

    String isUpdatable() default SpringElConstants.TRUE;
}
