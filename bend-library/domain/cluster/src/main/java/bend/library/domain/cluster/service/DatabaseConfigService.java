package bend.library.domain.cluster.service;

import bend.framework.properties.springproperties.database.Database;
import bend.framework.properties.springproperties.database.DatabaseType;
import bend.library.domain.cluster.entity.DatabaseConfig;

import java.util.List;

/**
 * Use for create database config and define runtime transactional and datasource configuration
 */
public interface DatabaseConfigService {

    /**
     * It will create a database config and just taking only database name and all other
     * properties take from system database properties.
     *
     * @param schemas Database names
     */
    void createDatabaseConfig(String... schemas);

    /**
     * @param schemas            Database names
     * @param databaseProperties Associate Database properties
     */
    void createDatabaseConfig(Database databaseProperties, String... schemas);

    /**
     * @param schemas      Database names
     * @param host         Database host
     * @param databaseType Database Type
     * @param username     Database Username
     * @param password     Database password
     * @param database     Associate Database properties
     */
    void createDatabaseConfig(String host, DatabaseType databaseType, String username, String password, Database database, String... schemas);

    List<DatabaseConfig> findAllDatabases();

    List<DatabaseConfig> findAllDatabaseConfigAccordingToKeys(String[] keys);
}
