package bend.library.config.el;

import java.util.Map;
import java.util.function.Supplier;

/**
 * The Spring Evaluator for evaluating value from expression
 */
public interface SpringElEvaluator {
    /**
     * Evaluate a value from expression
     *
     * @param expression      The Main Expression
     * @param ifErrorOccurred The Value returned, if the current value occurred any error
     * @return Evaluated Value
     */
    <T> T evaluate(Class<T> clazz, String expression, Supplier<T> ifErrorOccurred);

    /**
     * Evaluate a value from expression
     *
     * @param expression      The Main Expression
     * @param modelValue      The Entity Model value
     * @param ifErrorOccurred The Value returned, if the current value occurred any error
     * @return Evaluated Value
     */
    <T> T evaluate(Class<T> clazz, String expression, Supplier<T> ifErrorOccurred, Object modelValue);

    /**
     * Evaluate a value from expression with predeclared variables
     *
     * @param expression      The Main Expression
     * @param ifErrorOccurred The Value returned, if the current value occurred any error
     * @param value           The declared value
     * @return Evaluated Value
     */
    <T> T evaluate(Class<T> clazz, String expression, Supplier<T> ifErrorOccurred, Object value, final Object rootObject);

    /**
     * Evaluate a value from expression with predeclared variables
     *
     * @param expression      The Main Expression
     * @param ifErrorOccurred The Value returned, if the current value occurred any error
     * @param variable        The declared variable name
     * @param value           The declared value
     * @return Evaluated Value
     */
    <T> T evaluate(Class<T> clazz, String expression, Supplier<T> ifErrorOccurred, String variable, Object value, final Object rootObject);

    /**
     * Evaluate a value from expression
     *
     * @param expression      The Main Expression
     * @param ifErrorOccurred The Value returned, if the current value occurred any error
     * @param variables       The Predeclared Variables
     * @return Evaluated Value
     */
    <T> T evaluate(Class<T> clazz, String expression, Supplier<T> ifErrorOccurred, Map<String, Object> variables, final Object rootObject);
}
