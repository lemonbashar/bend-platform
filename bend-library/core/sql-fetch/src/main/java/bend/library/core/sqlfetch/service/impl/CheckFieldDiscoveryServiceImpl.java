package bend.library.core.sqlfetch.service.impl;

import bend.library.annotation.Discoverable;
import bend.library.config.el.SpringElEvaluator;
import bend.library.config.security.util.SecurityUtil;
import bend.library.core.sqlfetch.service.CheckFieldDiscoveryService;
import bend.library.core.sqlfetch.service.FieldDiscovery;
import bend.library.data.fetch.FieldDefinition;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;

@RequiredArgsConstructor
@Log4j2
@Service
public class CheckFieldDiscoveryServiceImpl implements CheckFieldDiscoveryService {
    private final @NonNull SpringElEvaluator springElEvaluator;
    private final @NonNull FieldDiscovery fieldDiscovery;


    @Override
    public boolean isDiscoverableExistence(String domainName, String fieldName) {
        Field field = fieldDiscovery.findField(domainName, fieldName);
        if (field == null) return false;
        if (SecurityUtil.isSuperAdmin()) return true;
        if (!field.isAnnotationPresent(Discoverable.class)) return false;
        return springElEvaluator.evaluate(Boolean.class, field.getAnnotation(Discoverable.class).allowCheckExistence(), ()->false, null);
    }

    @Override
    public boolean isDiscoverableEdit(FieldDefinition fieldDefinition) {
        Field field = fieldDiscovery.findField(fieldDefinition.getDomainName(), fieldDefinition.getFieldName());
        if (field == null) return false;
        if (SecurityUtil.isSuperAdmin()) return true;
        if (!field.isAnnotationPresent(Discoverable.class)) return false;
        return springElEvaluator.evaluate(Boolean.class, field.getAnnotation(Discoverable.class).allowEdit(), ()->false, null);
    }
}
