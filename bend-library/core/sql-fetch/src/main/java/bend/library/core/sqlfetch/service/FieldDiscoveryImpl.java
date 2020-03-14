package bend.library.core.sqlfetch.service;

import bend.framework.properties.springproperties.SpringProperties;
import bend.framework.reflex.ClassAccess;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;

@RequiredArgsConstructor
@Log4j2
@Service
public class FieldDiscoveryImpl implements FieldDiscovery {
    private final @NonNull SpringProperties properties;

    @Override
    public Field findField(String domainName, String fieldName) {
        Class clazz = null;
        for (String pkg : properties.getDatabase().getHibernate().getAnnotatedPackages()) {
            try {
                clazz = Class.forName(pkg + "." + domainName);
                if (clazz != null)
                    break;
            } catch (Exception e) {
                log.error(e);
            }
        }
        return findField(clazz, fieldName);
    }

    @Override
    public Field findField(Class clazz, String fieldName) {
        return ClassAccess.getField(clazz, fieldName);
    }
}
