package bend.library.core.discovery.impl;

import bend.framework.properties.springproperties.SpringProperties;
import bend.library.core.discovery.ClassDiscovery;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Log4j2
@RequiredArgsConstructor
@Service
public class ClassDiscoveryImpl implements ClassDiscovery {
    private final @NonNull SpringProperties properties;

    @Override
    public Class<?> findClass(String className) {
        Class<?> clazz = null;
        for (String pack : properties.getSettings().getUtility().getSqlFetch().getDomainPackages()) {
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
