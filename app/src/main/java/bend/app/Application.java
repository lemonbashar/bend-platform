package bend.app;

import bend.library.config.PropertiesConfig;
import bend.library.config.WebConfigurer;
import bend.library.config.constants.ProfileConstants;
import bend.library.config.database.rdbms.RdbmsJpaConfig;
import bend.library.config.migration.MigrationConfiguration;
import bend.library.config.security.SecurityConfig;
import bend.library.config.security.jwt.JwtSecurityConfig;
import bend.library.controller.ControllerConfig;
import bend.library.controller.rest.RestConfig;
import bend.library.core.prepersist.PrePersistConfiguration;
import bend.library.domain.DomainConfig;
import bend.library.domain.cluster.ClusterDomainConfig;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.liquibase.LiquibaseAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.core.env.Environment;
import org.springframework.core.env.SimpleCommandLinePropertySource;

import javax.annotation.PostConstruct;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Arrays;
import java.util.Collection;

//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Log4j2
@RequiredArgsConstructor
@SpringBootApplication(scanBasePackageClasses = {PropertiesConfig.class, MigrationConfiguration.class,
        RdbmsJpaConfig.class,
        PrePersistConfiguration.class,
        DomainConfig.class,
        WebConfigurer.class,
        SecurityConfig.class,
        ClusterDomainConfig.class,
        JwtSecurityConfig.class, ControllerConfig.class, RestConfig.class},
        exclude = {DataSourceAutoConfiguration.class, JpaRepositoriesAutoConfiguration.class, HibernateJpaAutoConfiguration.class, LiquibaseAutoConfiguration.class})
public class Application {

    public static ConfigurableApplicationContext applicationContext;

    private final @NonNull Environment env;

    public static void main(String[] args) throws UnknownHostException {
        SpringApplication application = new SpringApplication(Application.class);
        SimpleCommandLinePropertySource propertySource = new SimpleCommandLinePropertySource(args);
        //addDefaultProfile(application, propertySource);
        applicationContext = application.run(args);
        Environment env = applicationContext.getEnvironment();
        log.info("Access URLs:\n----------------------------------------------------------\n\t" +
                        "Local: \t\thttp://127.0.0.1:{}\n\t" +
                        "External: \thttp://{}:{}\n----------------------------------------------------------",
                env.getProperty("server.port"),
                InetAddress.getLocalHost().getHostAddress(),
                env.getProperty("server.port"));
    }

    private static void addDefaultProfile(SpringApplication application, SimpleCommandLinePropertySource propertySource) {
        if (!propertySource.containsProperty("spring.profiles.active") &&
                !System.getenv().containsKey("SPRING_PROFILES_ACTIVE")) {

            application.setAdditionalProfiles(ProfileConstants.DEV);
        }
    }

    @PostConstruct
    public void construct() {
        if (env.getActiveProfiles().length == 0) {
            log.warn("No Spring profile configured, running with default configuration");
        } else {
            log.info("Running with Spring profile(s) : {}", Arrays.toString(env.getActiveProfiles()));
            Collection<String> activeProfiles = Arrays.asList(env.getActiveProfiles());
            if (activeProfiles.contains(ProfileConstants.DEV) && activeProfiles.contains(ProfileConstants.PROD)) {
                log.error("You have mis-configured your application! " +
                        "It should not run with both the 'dev' and 'prod' profiles at the same time.");
            }
        }

    }
}
