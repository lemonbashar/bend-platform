package bend.library.core.prepersist;

import bend.library.domain.entity.BaseEntity;

import java.lang.annotation.Annotation;

/**
 * This interface make the
 *
 * @author lemon
 * 3/10/2020
 * khairul@impelitsolutions.com
 */


public interface PrePersistAware<T extends Annotation> {
    void aware(BaseEntity<?> baseEntity, T t);
}
