package bend.library.annotation;

import bend.library.constant.SpringElConstants;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Use a helper annotation for CheckFieldDiscoveryService
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Discoverable {
    /**
     * Accept Spring-EL
     *
     * @return Spring-EL true if the existence is allowed
     */
    String allowCheckExistence() default SpringElConstants.TRUE;

    String allowEdit() default SpringElConstants.Security.IS_SUPER_ADMIN;
}
