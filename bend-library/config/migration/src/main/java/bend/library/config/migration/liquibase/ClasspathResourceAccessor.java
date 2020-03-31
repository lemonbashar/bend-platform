package bend.library.config.migration.liquibase;

import bend.framework.properties.springproperties.database.migration.Liquibase;
import liquibase.resource.ClassLoaderResourceAccessor;
import liquibase.resource.FileSystemResourceAccessor;
import liquibase.resource.ResourceAccessor;
import lombok.NonNull;
import lombok.extern.log4j.Log4j2;

import java.io.IOException;
import java.io.InputStream;
import java.util.Set;

/**
 * @author lemon
 * 3/12/2020
 * khairul@impelitsolutions.com
 */
@Log4j2
public class ClasspathResourceAccessor implements ResourceAccessor {
    private static final String CLASSPATH = "classpath:";
    private static final String FILEPATH = "file:";
    private final @NonNull ClassLoader classLoader;
    private final Liquibase liquibase;
    private ResourceAccessor classpathAccessor;
    private ResourceAccessor fileAccessor;
    private ResourceAccessor otherAccessor;

    public ClasspathResourceAccessor(@NonNull ClassLoader classLoader, Liquibase liquibase) {
        this.classLoader = classLoader;
        this.liquibase = liquibase;
        this.classpathAccessor = new ClassLoaderResourceAccessor(classLoader);
        this.fileAccessor = new FileSystemResourceAccessor();
        this.otherAccessor = this.classpathAccessor;
    }

    public ClasspathResourceAccessor(@NonNull ClassLoader classLoader, Liquibase liquibase, ResourceAccessor otherAccessor) {
        this.classLoader = classLoader;
        this.liquibase = liquibase;
        this.classpathAccessor = new ClassLoaderResourceAccessor(classLoader);
        this.fileAccessor = new FileSystemResourceAccessor();
        this.otherAccessor = otherAccessor;
    }

    @Override
    public Set<InputStream> getResourcesAsStream(String path) throws IOException {
        log.warn("Migrating started for " + path);
        return getAccessor(path).getResourcesAsStream(extractFilePath(path));
    }

    @Override
    public Set<String> list(String relativeTo, String path, boolean includeFiles, boolean includeDirectories, boolean recursive) throws IOException {
        log.warn("Started Migrating at Directory " + path + " ");
        return getAccessor(path).list(relativeTo, extractFilePath(path), includeFiles, includeDirectories, liquibase.isRecursiveInclude());
    }

    protected String extractFilePath(String path) {
        return path.startsWith(CLASSPATH) ? path.substring(CLASSPATH.length()) : (path.startsWith(FILEPATH) ? path.substring(FILEPATH.length()) : path);
    }

    protected ResourceAccessor getAccessor(String path) {
        if (path.startsWith(CLASSPATH))
            return this.classpathAccessor;
        else if (path.startsWith(FILEPATH))
            return this.fileAccessor;
        else
            return this.otherAccessor;
    }

    @Override
    public ClassLoader toClassLoader() {
        return this.classLoader;
    }
}
