package bend.library.core.prepersist.impl;

import bend.framework.base.util.BendOptional;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.config.el.ElEvaluator;
import bend.library.config.security.service.UserService;
import bend.library.core.prepersist.PrePersistAware;
import bend.library.domain.entity.BaseEntity;
import bend.library.domain.entity.User;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.math.BigInteger;

/**
 * @author lemon
 * 3/10/2020
 * khairul@impelitsolutions.com
 */

@RequiredArgsConstructor
@Log4j2
@Service
public class AutoUpdateAwareImpl implements PrePersistAware<AutoUpdate> {
    private final @NonNull ElEvaluator elEvaluator;
    private final @NonNull UserService userService;

    @Override
    public void aware(BaseEntity<?> baseEntity, AutoUpdate autoUpdate) {
        if(!elEvaluator.evaluate(Boolean.class, autoUpdate.isApplicable(), ()->false, baseEntity))
            return;
        BigInteger uid = BendOptional.ofNullable(elEvaluator.evaluate(BigInteger.class, autoUpdate.updateBy(),()->userService.systemUser().getId(), baseEntity))
                .orElse(userService.systemUser().getId());
        baseEntity.setUpdateBy(new User(uid));
    }
}
