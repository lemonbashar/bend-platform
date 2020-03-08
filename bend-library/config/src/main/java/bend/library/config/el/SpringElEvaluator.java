package bend.library.config.el;

import java.util.Map;

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
    <T> T evaluate(Class<T> clazz, String expression, T ifErrorOccurred);

    /**
     * Evaluate a value from expression with predeclared variables
     *
     * @param expression      The Main Expression
     * @param ifErrorOccurred The Value returned, if the current value occurred any error
     * @param variable        The declared variable name
     * @param value           The declared value
     * @return Evaluated Value
     */
    <T> T evaluate(Class<T> clazz, String expression, T ifErrorOccurred, String variable, Object value);

    /**
     * Evaluate a value from expression
     *
     * @param expression      The Main Expression
     * @param ifErrorOccurred The Value returned, if the current value occurred any error
     * @param variables       The Predeclared Variables
     * @return Evaluated Value
     */
    <T> T evaluate(Class<T> clazz, String expression, T ifErrorOccurred, Map<String, Object> variables);
}
