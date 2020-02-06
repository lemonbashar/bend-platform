package bend.library.service;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * A Configuration for standalone test configuration purposes.
 *
 * @author lemon
 * @date 2/6/2020
 * @email khairul@impelitsolutions.com
 */

@Configuration
@ComponentScan(basePackages = {"bend.library.service"})
public class ServiceConfiguration {
}
