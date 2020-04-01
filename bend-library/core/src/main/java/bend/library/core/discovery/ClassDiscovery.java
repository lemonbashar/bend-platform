package bend.library.core.discovery;

public interface ClassDiscovery {
    Class<?> findClass(String[] locatePackages, String className);
}
