package bend.library.core.prepersist.impl;

import bend.library.annotation.prepersist.AutoActive;
import bend.library.config.el.ElEvaluator;
import bend.library.core.prepersist.AutoPrePersistAware;
import bend.library.domain.entity.BaseEntity;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.expression.EvaluationContext;
import org.springframework.stereotype.Service;

/**
 * @author lemon
 * 3/10/2020
 * khairul@impelitsolutions.com
 */

@RequiredArgsConstructor
@Log4j2
@Service
public class AutoActiveAwareImpl implements AutoPrePersistAware<AutoActive> {
    private final @NonNull ElEvaluator elEvaluator;
    private static final String model ="#model";

    @Override
    public void aware(BaseEntity<?> baseEntity, AutoActive autoActive, EvaluationContext evaluationContext) {

    }
}
