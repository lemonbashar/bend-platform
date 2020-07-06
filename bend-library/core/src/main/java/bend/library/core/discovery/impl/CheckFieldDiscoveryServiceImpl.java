package bend.library.core.discovery.impl;

import bend.library.annotation.Discoverable;
import bend.library.config.el.SpringElEvaluator;
import bend.library.config.security.util.SecurityUtil;
import bend.library.core.discovery.CheckFieldDiscoveryService;
import bend.library.core.discovery.FieldDiscovery;
import bend.library.data.fetch.FieldDefinition;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;

@RequiredArgsConstructor
@Service
public class CheckFieldDiscoveryServiceImpl implements CheckFieldDiscoveryService {
    private final @NonNull SpringElEvaluator springElEvaluator;
    private final @NonNull FieldDiscovery fieldDiscovery;


    @Override
    public boolean isDiscoverableForExistence(String domainName, String fieldName) {
        Field field = fieldDiscovery.findField(domainName, fieldName);
        if (field == null) return false;
        if (SecurityUtil.isSuperAdmin()) return true;
        if (!field.isAnnotationPresent(Discoverable.class)) return false;
        return springElEvaluator.evaluate(Boolean.class, field.getAnnotation(Discoverable.class).allowCheckExistence(), () -> false);
    }

    @Override
    public boolean isDiscoverableForEdit(FieldDefinition fieldDefinition) {
        Field field = fieldDiscovery.findField(fieldDefinition.getDomainName(), fieldDefinition.getFieldName());
        if (field == null) return false;
        if (SecurityUtil.isSuperAdmin()) return true;
        if (!field.isAnnotationPresent(Discoverable.class)) return false;
        return springElEvaluator.evaluate(Boolean.class, field.getAnnotation(Discoverable.class).allowEdit(), () -> false);
    }
}
