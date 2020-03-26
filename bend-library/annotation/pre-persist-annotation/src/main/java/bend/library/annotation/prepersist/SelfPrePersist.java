package bend.library.annotation.prepersist;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface SelfPrePersist {
    /**
     * This value represents that object should call bend.library.cluster.BaseEntity.prePersist() or not
     * @return boolean
     */
    boolean value() default true;
}
