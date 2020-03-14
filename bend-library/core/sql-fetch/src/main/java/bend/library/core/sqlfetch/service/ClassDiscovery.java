package bend.library.core.sqlfetch.service;

public interface ClassDiscovery {
    Class findClass(String[] locatePackages, String className);
}
