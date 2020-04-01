package bend.library.core.dao.impl;

import bend.library.annotation.prepersist.PrePersist;
import bend.library.config.el.SpringElEvaluator;
import bend.library.constant.BaseConstants;
import bend.library.core.dao.AppUtilJdbcDao;
import bend.library.data.fetch.FieldDefinition;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@RequiredArgsConstructor
@Service
public class AbstractAppUtilJdbcDao implements AppUtilJdbcDao {
    @PersistenceContext(unitName = BaseConstants.ROUTING_JPA_UNIT)
    protected EntityManager entityManager;
    protected final @NonNull SpringElEvaluator springElEvaluator;

    @SuppressWarnings("JpaQlInspection")
    @Override
    public boolean isExistFieldValue(String table, String field, String value) {
        return entityManager.createQuery("SELECT id FROM " + table + " tab WHERE tab." + field + " = '" + value + "'").getResultList().size()>0;
    }

    @Transactional(rollbackFor = SecurityException.class)
    @Override
    public void updateValue(FieldDefinition fieldDefinition) {
        Query query = entityManager.createQuery("update " + fieldDefinition.getDomainName() + " model SET model." + fieldDefinition.getFieldName() + " = '" + fieldDefinition.getValue() + "' WHERE model.id = '" + fieldDefinition.getId() + "'");
        query.executeUpdate();

        Query queryGet = entityManager.createQuery("SELECT model FROM " + fieldDefinition.getDomainName() + " model WHERE model.id = '" + fieldDefinition.getId() + "'");
        Object obj = queryGet.getSingleResult();
        if (obj.getClass().isAnnotationPresent(PrePersist.class)) {
            PrePersist prePersist = obj.getClass().getAnnotation(PrePersist.class);
            if(this.springElEvaluator.evaluate(Boolean.class, prePersist.isApplicable(), ()->true, obj))
                if(!this.springElEvaluator.evaluate(Boolean.class, prePersist.isUpdatable(), ()->false, obj))
                    throw new SecurityException("This Entity is Not Updateable for current instance information ");
        }
    }
}
