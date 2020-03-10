package bend.library.core.prepersist;

import bend.library.annotation.prepersist.PrePersist;
import bend.library.domain.entity.BaseEntity;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.context.annotation.Configuration;

import java.util.Iterator;

/**
 * @author lemon
 * 3/9/2020
 * khairul@impelitsolutions.com
 */

@RequiredArgsConstructor
@Configuration
@Aspect
public class PrePersistAspect {
    private final @NonNull PrePersistAware prePersistAware;

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
    public void auditForSave(JoinPoint joinPoint) throws Throwable {
        Object obj = joinPoint.getArgs()[0];
        if (isPrePersistable(obj))
            prePersistAware.aware((BaseEntity) obj, obj.getClass().getAnnotation(PrePersist.class));
    }

    @SuppressWarnings("unchecked")
    @Before("repositorySaveAllCallPointcut()")
    public void auditForSaveAll(JoinPoint joinPoint) throws Throwable {
        Iterable<Object> objects = (Iterable<Object>) joinPoint.getArgs()[0];
        Iterator<Object> objectIterator = objects.iterator();
        if (objectIterator.hasNext()) {
            Object obj = objectIterator.next();
            if (isPrePersistable(obj)) {
                prePersistAware.aware((BaseEntity) obj, obj.getClass().getAnnotation(PrePersist.class));
                while (objectIterator.hasNext()) {
                    Object obj2 = objectIterator.next();
                    prePersistAware.aware((BaseEntity) obj2, obj2.getClass().getAnnotation(PrePersist.class));
                }
            }
        }
    }

    private boolean isPrePersistable(Object obj) {
        return obj instanceof BaseEntity && obj.getClass().isAnnotationPresent(PrePersist.class);
    }
}
