package bend.library.core.prepersist;

import bend.library.annotation.prepersist.PrePersist;
import bend.library.domain.entity.BaseEntity;

/**
 * This interface make the
 *
 * @author lemon
 * 3/10/2020
 * khairul@impelitsolutions.com
 */


public interface PrePersistAware {
    void aware(BaseEntity<?> baseEntity, PrePersist prePersist);
}
