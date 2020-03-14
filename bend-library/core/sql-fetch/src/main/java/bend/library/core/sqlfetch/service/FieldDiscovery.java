package bend.library.core.sqlfetch.service;

import java.lang.reflect.Field;

public interface FieldDiscovery {
    Field findField(String domainName, String fieldName);

    Field findField(Class clazz, String fieldName);
}
