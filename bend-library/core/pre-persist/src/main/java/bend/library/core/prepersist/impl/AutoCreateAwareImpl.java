package bend.library.core.prepersist.impl;

import bend.framework.base.util.BendOptional;
import bend.library.annotation.prepersist.AutoCreate;
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
public class AutoCreateAwareImpl implements PrePersistAware<AutoCreate> {
    private final @NonNull ElEvaluator elEvaluator;
    private final @NonNull UserService userService;

    @Override
    public void aware(BaseEntity<?> baseEntity, AutoCreate autoCreate) {
        if (!elEvaluator.evaluate(Boolean.class, autoCreate.isApplicable(), () -> false, baseEntity))
            return;
        BigInteger uid = BendOptional.ofNullable(elEvaluator.evaluate(BigInteger.class, autoCreate.createBy(), () -> userService.systemUserId(), baseEntity))
                .orElse(userService.systemUserId());
        baseEntity.setCreateBy(new User(uid));
    }
}
