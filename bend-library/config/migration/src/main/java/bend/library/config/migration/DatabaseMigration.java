package bend.library.config.migration;

import javax.sql.DataSource;
import java.util.List;

/**
 * @author lemon
 * 3/12/2020
 * khairul@impelitsolutions.com
 */

public interface DatabaseMigration {
    void migrate(DataSource dataSource);

    void migrate(List<DataSource> dataSources);
}
