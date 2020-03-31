package bend.library.config.el;

import lombok.NonNull;
import lombok.extern.log4j.Log4j2;
import org.springframework.expression.BeanResolver;
import org.springframework.expression.EvaluationContext;
import org.springframework.expression.Expression;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;

import java.util.Map;
import java.util.function.Supplier;

@SuppressWarnings("WeakerAccess")
@Log4j2
public abstract class AbstractSpringElEvaluator implements SpringElEvaluator {
    private static final String ROOT_VARIABLE_NAMAE = "model";
    protected final @NonNull ExpressionParser expressionParser;
    protected final @NonNull BeanResolver beanResolver;

    public AbstractSpringElEvaluator(ExpressionParser expressionParser, BeanResolver beanResolver) {
        this.expressionParser = expressionParser;
        this.beanResolver = beanResolver;
    }

    @Override
    public <T> T evaluate(Class<T> clazz, String expression, Supplier<T> ifErrorOccurred) {
        return evaluate(clazz, expression, ifErrorOccurred, context(null));
    }

    @Override
    public <T> T evaluate(Class<T> clazz, String expression, Supplier<T> ifErrorOccurred, Object modelValue) {
        return evaluate(clazz, expression, ifErrorOccurred, modelValue, null);
    }

    @Override
    public <T> T evaluate(final Class<T> clazz, final String expression, final Supplier<T> ifErrorOccurred, final Object modelValue, final Object rootObject) {
        return evaluate(clazz, expression, ifErrorOccurred, ROOT_VARIABLE_NAMAE, modelValue, rootObject);
    }

    @Override
    public <T> T evaluate(final Class<T> clazz, final String expression, final Supplier<T> ifErrorOccurred, final String variable, final Object value, final Object rootObject) {
        EvaluationContext context = context(rootObject);
        context.setVariable(variable, value);
        return evaluate(clazz, expression, ifErrorOccurred, context);
    }

    @Override
    public <T> T evaluate(Class<T> clazz, String expression, Supplier<T> ifErrorOccurred, Map<String, Object> variables, final Object rootObject) {
        StandardEvaluationContext context = context(rootObject);
        context.setVariables(variables);
        return evaluate(clazz, expression, ifErrorOccurred, context);
    }

    public StandardEvaluationContext context(Object rootObject) {
        StandardEvaluationContext context = null;
        context = rootObject == null ? new StandardEvaluationContext() : new StandardEvaluationContext(rootObject);
        context.setBeanResolver(beanResolver);
        return context;
    }

    protected <T> T evaluate(Class<T> clazz, String expression, Supplier<T> ifErrorOccurred, EvaluationContext context) {
        try {
            Expression parsedExpression = expressionParser.parseExpression(expression);
            return parsedExpression.getValue(context, clazz);
        } catch (Throwable throwable) {
            log.error(throwable);
            return ifErrorOccurred.get();
        }
    }
}
