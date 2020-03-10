package bend.library.core.prepersist.impl;

import bend.library.annotation.prepersist.PrePersist;
import bend.library.core.prepersist.PrePersistAware;
import bend.library.domain.entity.BaseEntity;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

/**
 * @author lemon
 * 3/10/2020
 * khairul@impelitsolutions.com
 */

@Log4j2
@Service
public class PrePersistAwareImpl implements PrePersistAware {
    @Override
    public void aware(BaseEntity<?> baseEntity, PrePersist prePersist) {
        log.debug("Base-Entity:" + baseEntity);
    }
}
