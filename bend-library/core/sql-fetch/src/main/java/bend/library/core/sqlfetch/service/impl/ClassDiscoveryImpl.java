package bend.library.core.sqlfetch.service.impl;

import bend.library.core.sqlfetch.service.ClassDiscovery;
import org.springframework.stereotype.Service;

@Service
public class ClassDiscoveryImpl implements ClassDiscovery {

    @Override
    public Class findClass(String[] locatePackages, String className) {
        Class clazz = null;
        for (String pack : locatePackages) {
            try {
                clazz = Class.forName(pack + "." + className);
                break;
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
        }
        return clazz;
    }
}
