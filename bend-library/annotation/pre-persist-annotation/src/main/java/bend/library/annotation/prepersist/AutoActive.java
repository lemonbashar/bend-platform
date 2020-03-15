package bend.library.annotation.prepersist;

import bend.library.config.constants.SpringElConstants;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Mark the entity to automatically set active or not while create or update an entity
 *
 * @author lemon
 * 3/10/2020
 * khairul@impelitsolutions.com
 */

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface AutoActive {
    /**
     * It's the SPEL,, which is used to detect that the Annotation is applicable for
     * current user or not.<br/>
     * EXAMPLE: SPEL: @securityService.hasAnyAuthority('ROLE_ADMIN','ROLE_MANAGER')
     *
     * @return True if annotation is applicable otherwise false.
     */
    String isApplicable() default SpringElConstants.TRUE;

    /**
     * Return SPEL of active or inactive status while active or inactive. <br/>
     * Example: SPEL: @securityService.hasAnyAuthority('ROLE_ADMIN','ROLE_MANAGER')
     *
     * @return SPEL OF Active-Status
     */
    String isActive() default SpringElConstants.Security.WHEN_CREATE_BY_DEFAULT_FALSE_IF_SETTINGS_ADMIN_TRUE__WHEN_UPDATE_IF_SETTINGS_ADMIN_THEN_DEFAULT_VALUE_OTHERWISE_FALSE;
}
