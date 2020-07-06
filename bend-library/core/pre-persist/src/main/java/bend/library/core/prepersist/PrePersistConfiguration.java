package bend.library.core.prepersist;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

/**
 * @author lemon
 * 3/9/2020
 * khairul@impelitsolutions.com
 */
@Configuration
@EnableAspectJAutoProxy
@ComponentScan("bend.library.core.prepersist")
public class PrePersistConfiguration {
    /*LOOK
     * This Configuration need Enable AspectJAutoProxy, and in AspectConfig Class it has been added
     * */
}
