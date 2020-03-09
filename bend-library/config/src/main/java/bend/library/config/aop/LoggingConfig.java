package bend.library.config.aop;

import bend.library.config.constants.ProfileConstants;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import java.util.Arrays;

/**
 * @author lemon
 * 3/9/2020
 * khairul@impelitsolutions.com
 */
@RequiredArgsConstructor
@Log4j2
@Profile({ProfileConstants.DEV,ProfileConstants.TEST})
@Component
@Aspect
public class LoggingConfig {
    private final @NonNull Environment env;

    @Pointcut("within(bend.*..*)")
    public void basePointcut() {
    }

    @Pointcut("basePointcut()")
    public void allPointcut() {

    }

    @AfterThrowing(pointcut = "allPointcut()", throwing = "e")
    public void logAfterThrowing(JoinPoint joinPoint, Throwable e) {
        if (env.acceptsProfiles(ProfileConstants.DEV)) {
            log.error("Exception in {}.{}() with cause = {}", joinPoint.getSignature().getDeclaringTypeName(),
                    joinPoint.getSignature().getName(), e.getCause(), e);

            log.error("Exception in " + joinPoint.getSignature().getDeclaringTypeName() + "." + joinPoint.getSignature().getName() + "() with cause = " + e.getCause(), e);
        }
    }

    @Around("allPointcut()")
    public Object logAround(ProceedingJoinPoint joinPoint) throws Throwable {
        log.debug("Enter: {}.{}() with argument[s] = {}", joinPoint.getSignature().getDeclaringTypeName(),
                joinPoint.getSignature().getName(), Arrays.toString(joinPoint.getArgs()));
        try {
            Object result = joinPoint.proceed();
            log.debug("Exit: {}.{}() with result = {}", joinPoint.getSignature().getDeclaringTypeName(),
                    joinPoint.getSignature().getName(), result);
            return result;
        } catch (IllegalArgumentException e) {
            log.error("Illegal argument: {} in {}.{}()", Arrays.toString(joinPoint.getArgs()),
                    joinPoint.getSignature().getDeclaringTypeName(), joinPoint.getSignature().getName());

            throw e;
        }
    }
}
