package bend.library.config.el;

import lombok.extern.log4j.Log4j2;
import org.springframework.expression.BeanResolver;
import org.springframework.expression.EvaluationContext;
import org.springframework.expression.Expression;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;

import java.util.Map;
import java.util.function.Supplier;

@Log4j2
public abstract class AbstractSpringElEvaluator implements SpringElEvaluator {
    protected final ExpressionParser expressionParser;
    private final BeanResolver beanResolver;

    public AbstractSpringElEvaluator(ExpressionParser expressionParser, BeanResolver beanResolver) {
        this.expressionParser = expressionParser;
        this.beanResolver = beanResolver;
    }

    @Override
    public <T> T evaluate(Class<T> clazz, String expression, Supplier<T> ifErrorOccurred, EvaluationContext evaluationContext) {
        try {
            Expression parsedExpression = expressionParser.parseExpression(expression);
            return parsedExpression.getValue(evaluationContext, clazz);
        } catch (Throwable throwable) {
            log.error(throwable);
            return ifErrorOccurred.get();
        }
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
}
