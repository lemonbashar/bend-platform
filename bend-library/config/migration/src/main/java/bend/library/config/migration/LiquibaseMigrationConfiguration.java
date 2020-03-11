package bend.library.config.migration;

import bend.framework.properties.springproperties.SpringProperties;
import bend.library.config.constants.ProfileConstants;
import liquibase.integration.spring.SpringLiquibase;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;

@Profile(ProfileConstants.LIQUIBASE)
@RequiredArgsConstructor
@Configuration
public class LiquibaseMigrationConfiguration {
    private final @NonNull SpringProperties properties;
    private final @NonNull DataSource clientDataSource;

    @Bean
    public SpringLiquibase springLiquibase() {
        SpringLiquibase liquibase = new SpringLiquibase();
        liquibase.setChangeLog("classpath:liquibase/" + properties.getDatabase().getLiquibaseType() + "/liquibase-changeLog.xml");
        liquibase.setDataSource(clientDataSource);
        return liquibase;
    }
}
