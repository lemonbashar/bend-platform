package bend.library.annotation;


import bend.library.constant.SpringElConstants;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * While a model or model data will be fetched by auto-fetch like SqlFetchService
 * from client side data, then it may be queried a protected confidential data,
 * and to keep confidentiality we need to restrict those data using this class
 * with restricted fields name
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface Restrictions {
    /**
     * @return Telling that the current user is able to fetch the data.
     */
    String canFetch() default SpringElConstants.TRUE;

    /**
     * @return Name of fields whose are restricted to fetch
     */
    String restrictedFields() default "{}";

    String[] restrictedFieldsIfErrorOccurred();
}
