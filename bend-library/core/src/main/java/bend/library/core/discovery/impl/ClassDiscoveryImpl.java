package bend.library.core.discovery.impl;

import bend.library.core.discovery.ClassDiscovery;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Log4j2
@Service
public class ClassDiscoveryImpl implements ClassDiscovery {

    @Override
    public Class<?> findClass(String[] locatePackages, String className) {
        Class<?> clazz = null;
        for (String pack : locatePackages) {
            try {
                clazz = Class.forName(pack + "." + className);
                break;
            } catch (ClassNotFoundException e) {
                log.error(e);
            }
        }
        return clazz;
    }
}
