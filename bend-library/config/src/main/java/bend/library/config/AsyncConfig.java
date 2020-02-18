package bend.library.config;

import bend.framework.properties.springproperties.SpringProperties;
import bend.library.config.exception.ExceptionHandlingAsyncTaskExecutor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler;
import org.springframework.aop.interceptor.SimpleAsyncUncaughtExceptionHandler;
import org.springframework.context.annotation.AdviceMode;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.AsyncConfigurer;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.lang.reflect.Method;
import java.util.concurrent.Executor;

@Log4j2
@RequiredArgsConstructor
@Configuration
@EnableAsync(proxyTargetClass = true, mode = AdviceMode.ASPECTJ)
@EnableScheduling
public class AsyncConfig implements AsyncConfigurer {
    private final @NonNull SpringProperties properties;


    @Override
    @Bean(name = "taskExecutor")
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(this.properties.getSettings().getAsync().getCorePoolSize());
        executor.setMaxPoolSize(this.properties.getSettings().getAsync().getMaxPoolSize());
        executor.setQueueCapacity(this.properties.getSettings().getAsync().getQueueCapacity());
        executor.setThreadNamePrefix(this.properties.getSettings().getAsync().getThreadNamePrefix());
        return new ExceptionHandlingAsyncTaskExecutor(executor);
    }

    @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return new SimpleAsyncUncaughtExceptionHandler() {
            @Override
            public void handleUncaughtException(Throwable ex, Method method, Object... params) {
                super.handleUncaughtException(ex, method, params);
            }
        };
    }
}
