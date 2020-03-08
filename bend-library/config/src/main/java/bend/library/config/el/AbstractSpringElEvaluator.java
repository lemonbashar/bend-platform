package bend.library.config.el;

import bend.framework.base.console.Console;
import org.springframework.expression.BeanResolver;
import org.springframework.expression.EvaluationContext;
import org.springframework.expression.Expression;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;

import java.util.Map;

public abstract class AbstractSpringElEvaluator implements SpringElEvaluator {
    protected final EvaluationContext evaluationContext;
    protected final ExpressionParser expressionParser;
    protected final Object rootObject;
    protected final Console console;
    private final BeanResolver beanResolver;

    public AbstractSpringElEvaluator(EvaluationContext evaluationContext, ExpressionParser expressionParser, Object rootObject, Console console, BeanResolver beanResolver) {
        this.evaluationContext = evaluationContext;
        this.expressionParser = expressionParser;
        this.rootObject = rootObject;
        this.console = console;
        this.beanResolver = beanResolver;
    }

    @Override
    public <T> T evaluate(Class<T> clazz, String expression, T ifErrorOccurred) {
        return evaluate(clazz, expression, ifErrorOccurred, evaluationContext);
    }

    @Override
    public <T> T evaluate(Class<T> clazz, String expression, T ifErrorOccurred, String variable, Object value) {
        EvaluationContext context = context(rootObject);
        context.setVariable(variable, value);
        return evaluate(clazz, expression, ifErrorOccurred, context);
    }

    @Override
    public <T> T evaluate(Class<T> clazz, String expression, T ifErrorOccurred, Map<String, Object> variables) {
        StandardEvaluationContext context = context(rootObject);
        context.setVariables(variables);
        return evaluate(clazz, expression, ifErrorOccurred, context);
    }

    protected StandardEvaluationContext context(Object rootObject) {
        StandardEvaluationContext context = null;
        context = rootObject == null ? new StandardEvaluationContext() : new StandardEvaluationContext(rootObject);
        context.setBeanResolver(beanResolver);
        return context;
    }

    protected <T> T evaluate(Class<T> clazz, String expression, T ifErrorOccurred, EvaluationContext evaluationContext) {
        try {
            Expression parsedExpression = expressionParser.parseExpression(expression);
            return parsedExpression.getValue(evaluationContext, clazz);
        } catch (Throwable throwable) {
            console.handleException(throwable);
            return ifErrorOccurred;
        }
    }
}
