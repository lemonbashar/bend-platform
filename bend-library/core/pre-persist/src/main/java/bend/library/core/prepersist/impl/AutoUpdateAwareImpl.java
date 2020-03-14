package bend.library.core.prepersist.impl;

import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.config.el.ElEvaluator;
import bend.library.config.security.service.UserService;
import bend.library.core.prepersist.AutoPrePersistAware;
import bend.library.domain.entity.BaseEntity;
import bend.library.domain.entity.User;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.expression.EvaluationContext;
import org.springframework.stereotype.Service;

import java.math.BigInteger;

import static bend.library.core.prepersist.impl.PrePersistAwareImpl.model;

/**
 * @author lemon
 * 3/10/2020
 * khairul@impelitsolutions.com
 */

@RequiredArgsConstructor
@Log4j2
@Service
public class AutoUpdateAwareImpl implements AutoPrePersistAware<AutoUpdate> {
    private final @NonNull ElEvaluator elEvaluator;
    private final @NonNull UserService userService;

    @Override
    public void aware(BaseEntity<?> baseEntity, AutoUpdate autoUpdate, EvaluationContext evaluationContext) {
        if(!elEvaluator.evaluate(Boolean.class, autoUpdate.isApplicable().replace(model, " "), ()->false, evaluationContext))
            return;
        BigInteger uid = elEvaluator.evaluate(BigInteger.class, autoUpdate.updateBy().replace(model, " "),()->userService.systemUser().getId(), evaluationContext);
        baseEntity.setUpdateBy(new User(uid));
    }
}
