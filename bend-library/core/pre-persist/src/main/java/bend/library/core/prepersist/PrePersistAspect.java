package bend.library.core.prepersist;

import bend.library.annotation.prepersist.PrePersist;
import bend.library.annotation.prepersist.SelfPrePersist;
import bend.library.core.prepersist.impl.PrePersistAwareImpl;
import bend.library.domain.entity.BaseEntity;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.context.annotation.Configuration;

import java.lang.reflect.InvocationTargetException;
import java.util.Iterator;

/**
 * @author lemon
 * 3/9/2020
 * khairul@impelitsolutions.com
 */
@Log4j2
@RequiredArgsConstructor
@Configuration
@Aspect
public class PrePersistAspect {
    private final @NonNull PrePersistAwareImpl prePersistAware;

    @Pointcut("execution(* org.springframework.data.jpa.repository.JpaRepository.save(..))")
    public void repositorySaveCallPointcut() {
    }

    @Pointcut("execution(* org.springframework.data.jpa.repository.JpaRepository.saveAll(..))")
    public void repositorySaveAllCallPointcut() {
    }

    @Pointcut("repositorySaveCallPointcut()")
    public void allPointcut() {
    }

    @Before("allPointcut()")
    public void auditForSave(JoinPoint joinPoint) {
        Object obj = joinPoint.getArgs()[0];
        if (isPrePersistAble(obj))
            prePersistAware.aware((BaseEntity<?>) obj, obj.getClass().getAnnotation(PrePersist.class));
        else if (obj.getClass().isAnnotationPresent(SelfPrePersist.class)) {
            try {
                obj.getClass().getMethod("prePersist").invoke(obj);
            } catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
                log.error(e);
            }
        }
    }

    @SuppressWarnings("unchecked")
    @Before("repositorySaveAllCallPointcut()")
    public void auditForSaveAll(JoinPoint joinPoint) {
        Iterable<Object> objects = (Iterable<Object>) joinPoint.getArgs()[0];
        Iterator<Object> objectIterator = objects.iterator();
        if (objectIterator.hasNext()) {
            Object obj = objectIterator.next();
            if (isPrePersistAble(obj)) {
                prePersistAware.aware((BaseEntity<?>) obj, obj.getClass().getAnnotation(PrePersist.class));
                while (objectIterator.hasNext()) {
                    Object obj2 = objectIterator.next();
                    prePersistAware.aware((BaseEntity<?>) obj2, obj2.getClass().getAnnotation(PrePersist.class));
                }
            } else if (obj.getClass().isAnnotationPresent(SelfPrePersist.class)) {
                try {
                    obj.getClass().getMethod("prePersist").invoke(obj);
                    while (objectIterator.hasNext()) {
                        Object obj2 = objectIterator.next();
                        try {
                            obj2.getClass().getMethod("prePersist").invoke(obj2);
                        } catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
                            log.error(e);
                        }
                    }
                } catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
                    log.error(e);
                }
            }
        }
    }

    private boolean isPrePersistAble(Object obj) {
        return obj instanceof BaseEntity && obj.getClass().isAnnotationPresent(PrePersist.class);
    }
}
