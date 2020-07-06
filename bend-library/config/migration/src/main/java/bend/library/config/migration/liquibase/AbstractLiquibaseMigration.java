package bend.library.config.migration.liquibase;

import bend.framework.properties.springproperties.SpringProperties;
import liquibase.Contexts;
import liquibase.Liquibase;
import liquibase.database.Database;
import liquibase.database.DatabaseFactory;
import liquibase.database.jvm.JdbcConnection;
import liquibase.exception.LiquibaseException;
import liquibase.resource.ResourceAccessor;
import lombok.NonNull;
import lombok.extern.log4j.Log4j2;

import java.sql.Connection;

@Log4j2
public abstract class AbstractLiquibaseMigration {
    private static final String LIQUIBASE_CHANGELOG_LOCK_NAME = "Z_LIQUIBASE_MIGRATION_CHANGELOG_LOCK";
    private static final String LIQUIBASE_CHANGELOG_NAME = "Z_LIQUIBASE_MIGRATION_CHANGELOG";
    protected final @NonNull SpringProperties properties;
    private ResourceAccessor resourceAccessor;

    private Liquibase liquibase;

    public AbstractLiquibaseMigration(@NonNull SpringProperties properties) {
        this.properties = properties;
        if (properties.getDatabase().getMigration().isActive()) {
            log.info("Liquibase Migration is active");
            this.resourceAccessor = new ClasspathResourceAccessor(getClass().getClassLoader(), properties.getDatabase().getMigration().getLiquibase());
        } else log.info("Migration is Not Active.");
    }

    protected void runChangelog(final Connection connection, final String changelogPath, final String tag, final String[] contexts) throws LiquibaseException {
        final Database database = DatabaseFactory.getInstance().findCorrectDatabaseImplementation(new JdbcConnection(connection));
        database.setDatabaseChangeLogTableName(LIQUIBASE_CHANGELOG_NAME);
        database.setDatabaseChangeLogLockTableName(LIQUIBASE_CHANGELOG_LOCK_NAME);

        this.liquibase = new Liquibase(changelogPath, this.resourceAccessor, database );
        if (tag != null)
            liquibase.update(tag, (contexts == null || contexts.length < 1) ? new Contexts() : new Contexts(contexts));
        else
            liquibase.update((contexts == null || contexts.length < 1) ? new Contexts() : new Contexts(contexts));
    }
}
