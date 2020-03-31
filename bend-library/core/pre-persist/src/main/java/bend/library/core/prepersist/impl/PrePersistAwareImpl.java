package bend.library.core.prepersist.impl;

import bend.library.annotation.prepersist.AutoActive;
import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.annotation.prepersist.PrePersist;
import bend.library.config.el.ElEvaluator;
import bend.library.config.exception.PrePersistException;
import bend.library.core.prepersist.PrePersistAware;
import bend.library.domain.entity.BaseEntity;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

/**
 * @author lemon
 * 3/10/2020
 * khairul@impelitsolutions.com
 */

@RequiredArgsConstructor
@Log4j2
@Service
public class PrePersistAwareImpl implements PrePersistAware<PrePersist> {
    private final @NonNull ElEvaluator elEvaluator;
    private final @NonNull PrePersistAware<AutoCreate> autoCreatePrePersistAware;
    private final @NonNull PrePersistAware<AutoUpdate> updateAutoPrePersistAware;

    @Override
    public void aware(BaseEntity<?> baseEntity, PrePersist prePersist) {
        if (!elEvaluator.evaluate(Boolean.class, prePersist.isUpdatable(), () -> false, baseEntity)) {
            throw new PrePersistException("Sorry! The model " + baseEntity.getClass().getName() + " is Not Updatable for current context/user actor.");
        }
        if (!elEvaluator.evaluate(Boolean.class, prePersist.isApplicable(), () -> false, baseEntity))
            return;
        if (baseEntity.getClass().isAnnotationPresent(AutoActive.class)) {
            AutoActive autoActive = baseEntity.getClass().getAnnotation(AutoActive.class);
            if (elEvaluator.evaluate(Boolean.class, autoActive.isApplicable(), () -> false, baseEntity))
                baseEntity.setActive(elEvaluator.evaluate(Boolean.class, autoActive.isActive(), () -> false, baseEntity));
        }
        if (baseEntity.getId() == null) {
            baseEntity.setCreateDate(LocalDate.now());
            if (baseEntity.getClass().isAnnotationPresent(AutoCreate.class))
                autoCreatePrePersistAware.aware(baseEntity, baseEntity.getClass().getAnnotation(AutoCreate.class));
        } else {
            baseEntity.setUpdateDate(LocalDate.now());
            if (baseEntity.getClass().isAnnotationPresent(AutoUpdate.class))
                updateAutoPrePersistAware.aware(baseEntity, baseEntity.getClass().getAnnotation(AutoUpdate.class));
        }
    }
}
