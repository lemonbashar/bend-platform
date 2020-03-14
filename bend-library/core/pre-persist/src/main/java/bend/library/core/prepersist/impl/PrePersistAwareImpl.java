package bend.library.core.prepersist.impl;

import bend.library.annotation.prepersist.AutoActive;
import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.annotation.prepersist.PrePersist;
import bend.library.config.el.ElEvaluator;
import bend.library.config.security.service.UserService;
import bend.library.core.prepersist.AutoPrePersistAware;
import bend.library.core.prepersist.PrePersistAware;
import bend.library.domain.entity.BaseEntity;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.expression.EvaluationContext;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Map;

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
    private final @NonNull AutoPrePersistAware<AutoCreate> autoCreatePrePersistAware;
    private final @NonNull AutoPrePersistAware<AutoUpdate> updateAutoPrePersistAware;
    public static final String model ="#model";

    @Override
    public void aware(BaseEntity<?> baseEntity, PrePersist prePersist) {
        final EvaluationContext evaluationContext = elEvaluator.context(baseEntity);
        if(!elEvaluator.evaluate(Boolean.class, prePersist.isApplicable().replace(model, " "), ()->false, evaluationContext))
            return;
        if(baseEntity.getClass().isAnnotationPresent(AutoActive.class)) {
            AutoActive autoActive = baseEntity.getClass().getAnnotation(AutoActive.class);
            if(elEvaluator.evaluate(Boolean.class, autoActive.isApplicable().replace(model, " "), ()->false, evaluationContext))
                baseEntity.setActive(elEvaluator.evaluate(Boolean.class, autoActive.isActive().replace(model, " "), ()->false, evaluationContext));
        }
        if(baseEntity.getId()==null) {
            baseEntity.setCreateDate(LocalDate.now());
            if(baseEntity.getClass().isAnnotationPresent(AutoCreate.class))
                autoCreatePrePersistAware.aware(baseEntity, baseEntity.getClass().getAnnotation(AutoCreate.class), evaluationContext);
        }
        else {
            baseEntity.setUpdateDate(LocalDate.now());
            if(baseEntity.getClass().isAnnotationPresent(AutoUpdate.class))
            updateAutoPrePersistAware.aware(baseEntity, baseEntity.getClass().getAnnotation(AutoUpdate.class), evaluationContext);
        }
    }
}
