package bend.library.config.el;

import org.springframework.context.ApplicationContext;
import org.springframework.context.expression.BeanFactoryResolver;
import org.springframework.expression.ExpressionParser;
import org.springframework.stereotype.Service;

@Service
public class ElEvaluator extends AbstractSpringElEvaluator {
    public ElEvaluator(ExpressionParser expressionParser, ApplicationContext applicationContext) {
        super(expressionParser, new BeanFactoryResolver(applicationContext));
    }
}
