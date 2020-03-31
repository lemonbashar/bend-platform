package bend.library.core.sqlfetch.restriction;

import bend.framework.datastructure.collection.Stack;
import bend.framework.datastructure.collection.impl.StackImpl;
import bend.framework.properties.springproperties.SpringProperties;
import bend.framework.reflex.ClassAccess;
import bend.framework.reflex.FieldAccessor;
import bend.framework.reflex.impl.ForceFieldAccessor;
import bend.library.annotation.Restrictions;
import bend.library.config.el.SpringElEvaluator;
import bend.library.core.sqlfetch.RestrictionCheckerService;
import bend.library.core.sqlfetch.enumeretion.ValidateResult;
import bend.library.core.sqlfetch.service.ClassDiscovery;
import bend.library.data.fetch.fetch.SqlFetchDefinition;
import bend.library.data.fetch.fetch.SqlJoin;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Service
public class RestrictionCheckerServiceImpl implements RestrictionCheckerService {
    private final @NonNull SpringProperties properties;
    private final @NonNull SpringElEvaluator springElEvaluator;
    private final @NonNull ClassDiscovery classDiscovery;

    @Override
    public boolean isAllow(final SqlFetchDefinition fetchDefinition) throws ClassNotFoundException {
        Class clazz = classDiscovery.findClass(properties.getDatabase().getHibernate().getAnnotatedPackages(), fetchDefinition.getDomain());
        if (clazz == null) {
            throw new SecurityException("Sorry Your provided sql contain a data-model named[" + fetchDefinition.getDomain() + "] , which doesn't exist");
        }
        Map<String, List<SqlJoin>> dependentAliasJoinMap = new HashMap<>(); /*A Join Map which all join collected against it's dependent alias*/
        if (fetchDefinition.getJoins() != null) {
            for (SqlJoin sqlJoin : fetchDefinition.getJoins()) {
                dependentAliasJoinMap.computeIfAbsent(sqlJoin.getDependentAlias(), k -> new ArrayList<>()).add(sqlJoin);
            }
        }
        Map<Class, Boolean> permissionHistoryToSelectionFetch = new HashMap<>();
        Map<Class, Boolean> permissionHistoryToFullyFetch = new HashMap<>();
        Map<String, List<String>> aliasSelectColumnMap = new HashMap<>();
        for (String selectColumn : fetchDefinition.getColumns()) {
            String[] split = selectColumn.split("\\.");
            if (split.length >= 2) {
                if (!aliasSelectColumnMap.containsKey(split[0]))
                    aliasSelectColumnMap.put(split[0], new ArrayList<>());
                aliasSelectColumnMap.get(split[0]).add(selectColumn.substring(split[0].length() + 1)); /*If The Select column was, [model.createBy.username] Then the map would be: model:createBy.username*/
            } else {
                if (split[0].equalsIgnoreCase(fetchDefinition.getAlias()))
                    validateFullDomainAliasRequest(clazz, permissionHistoryToFullyFetch, fetchDefinition.getAlias());
                else
                    validateFullDomainAliasRequest(findClassFromAlias(clazz, split[0], fetchDefinition.getAlias(), dependentAliasJoinMap), permissionHistoryToFullyFetch, split[0]);
            }
        }

        return validateSqlModelClasses(clazz, dependentAliasJoinMap, aliasSelectColumnMap, fetchDefinition, permissionHistoryToSelectionFetch, permissionHistoryToFullyFetch);
    }

    private void validateFullDomainAliasRequest(final Class clazz, Map<Class, Boolean> validateHistory, String alias) throws ClassNotFoundException {
        if (validateHistory.containsKey(clazz) && !validateHistory.get(clazz))
            throw new SecurityException("The Sql contains an alias named:[" + alias + "] Which have some restricted field, or recursive restricted field so you can't fetch the full model rather then fetch without restricted fields.");
        ValidateResult val = hasPermissionToFullyFetch(clazz, validateHistory);
        switch (val) {
            case CLASS_LEVEL_ERROR:
                throw new SecurityException("The current user has no permission to fetch alias [" + alias + "] fully for restricted fields or security reason");
            case CHILD_FIELD_LEVEL_ERROR:
                throw new SecurityException("Though the alias[" + alias + "] has full permission to fetch al-together, but it's child field has some restriction to fetching.");
        }
    }

    private ValidateResult hasPermissionToFullyFetch(final Class clazz, Map<Class, Boolean> validateHistory) throws ClassNotFoundException {
        if (clazz.isAnnotationPresent(Restrictions.class)) {
            Restrictions restrictions = (Restrictions) clazz.getAnnotation(Restrictions.class);
            boolean canFetch = springElEvaluator.evaluate(Boolean.class, restrictions.canFetch(), () -> false, null);

            String[] fields = springElEvaluator.evaluate(String[].class, restrictions.restrictedFields(), restrictions::restrictedFieldsIfErrorOccurred, null);
            if (!canFetch || fields.length > 0) {
                validateHistory.put(clazz, false);
                return ValidateResult.CLASS_LEVEL_ERROR;
            }
        }
        for (Field field : ClassAccess.getAllFields(clazz)) {
            Class fClass = null;
            if (isListTypeRelation(field)) {
                FieldAccessor fieldAccessor = new ForceFieldAccessor(field);
                fClass = resolveClass(fieldAccessor.actualTypeParameters()[0].getTypeName());
            } else if (isSingleRelation(field))
                fClass = field.getType();
            if (fClass != null) {
                if (hasPermissionToFullyFetch(fClass, validateHistory) != ValidateResult.NO_ERROR) {
                    validateHistory.put(fClass, false);
                    return ValidateResult.CHILD_FIELD_LEVEL_ERROR;
                } else {
                    validateHistory.put(clazz, true);
                }
            }
        }
        return ValidateResult.NO_ERROR;
    }

    private boolean validateSqlModelClasses(final Class clazz, Map<String, List<SqlJoin>> dependentAliasJoinMap, Map<String, List<String>> aliasSelectColumnMap, final SqlFetchDefinition fetchDefinition, Map<Class, Boolean> permissionHistoryToSelectionFetch, Map<Class, Boolean> permissionHistoryToFullFetch) throws ClassNotFoundException {
        for (String alias : aliasSelectColumnMap.keySet()) {
            if (!validateSqlModelClass(findClassFromAlias(clazz, alias, fetchDefinition.getAlias(), dependentAliasJoinMap), aliasSelectColumnMap.get(alias), permissionHistoryToSelectionFetch, permissionHistoryToFullFetch)) {
                permissionHistoryToSelectionFetch.put(clazz, false);
                return false;
            } else
                permissionHistoryToSelectionFetch.put(clazz, true);
        }
        return true;
    }

    private boolean validateSqlModelClass(final Class clazz, List<String> selectionColumns, final Map<Class, Boolean> permissionHistoryToSelectionFetch, Map<Class, Boolean> permissionHistoryToFullyFetch) throws ClassNotFoundException {
        String[] restrictedFields = null;
        if (permissionHistoryToSelectionFetch.containsKey(clazz) && !permissionHistoryToSelectionFetch.get(clazz))
            return false;
        if (clazz.isAnnotationPresent(Restrictions.class)) {
            Restrictions restrictions = (Restrictions) clazz.getAnnotation(Restrictions.class);
            if (!springElEvaluator.evaluate(Boolean.class, restrictions.canFetch(), () -> false, null)) {
                permissionHistoryToSelectionFetch.put(clazz, false);
                throw new SecurityException("The Entity Class:" + clazz.getSimpleName() + " has no permission to fetch for current user");
            }
            restrictedFields = springElEvaluator.evaluate(String[].class, restrictions.restrictedFields(), restrictions::restrictedFieldsIfErrorOccurred, null);
        }

        Map<Class, List<String>> nextProvidedColumnMap = new HashMap<>();
        for (String selectionColumn : selectionColumns) {
            String[] selectColumnsSplit = selectionColumn.split("\\.");

            Field field = ClassAccess.getField(clazz, selectColumnsSplit[0]);
            Class fieldClass = null;
            if (isListTypeRelation(field)) {
                FieldAccessor fieldAccessor = new ForceFieldAccessor(field);
                fieldClass = resolveClass(fieldAccessor.actualTypeParameters()[0].getTypeName());
            } else if (isSingleRelation(field))
                fieldClass = field.getType();

            if (fieldClass != null) {
                if (selectColumnsSplit.length == 1) { /*Single Field, But relation having*/
                    if (hasPermissionToFullyFetch(fieldClass, permissionHistoryToFullyFetch) != ValidateResult.NO_ERROR) {
                        permissionHistoryToFullyFetch.put(fieldClass, false);
                        throw new SecurityException("You have no permission to fetch:" + clazz.getSimpleName() + "." + selectionColumn + " Cause, Entity:" + fieldClass.getSimpleName() + " Contain some restriction and " + selectionColumn + " is an instance of:" + fieldClass.getSimpleName());
                    }
                } else
                    nextProvidedColumnMap.computeIfAbsent(fieldClass, k -> new ArrayList<>()).add(selectionColumn.substring(selectColumnsSplit[0].length() + 1));
            } else if (selectColumnsSplit.length == 1) { /*Single Field, non-relational*/
                if (restrictedFields != null && restrictedFields.length > 0) {
                    if (isInArray(selectColumnsSplit[0], restrictedFields))
                        throw new SecurityException("Sorry! The current user doesn't have any permission to fetch:" + clazz.getSimpleName() + "." + selectColumnsSplit[0]);
                }
            } else
                throw new SecurityException("Sorry about your SQL ORM, here you provide, " + selectionColumn + " for model targeting:" + clazz.getSimpleName() + " Where it doesn't contain relation name:" + selectColumnsSplit[0]);
        }

        for (Class nextProvidedClass : nextProvidedColumnMap.keySet()) {
            if (!validateSqlModelClass(nextProvidedClass, nextProvidedColumnMap.get(nextProvidedClass), permissionHistoryToSelectionFetch, permissionHistoryToFullyFetch)) {
                permissionHistoryToSelectionFetch.put(nextProvidedClass, false);
                return false;
            } else permissionHistoryToSelectionFetch.put(nextProvidedClass, true);
        }
        return true;
    }

    private boolean isInArray(String fieldName, String[] restrictedFields) {
        for (String restrictedField : restrictedFields)
            if (restrictedField.equalsIgnoreCase(fieldName)) return true;
        return false;
    }

    private Class findClassFromAlias(final Class rootClazz, String aliasName, String rootAlias, Map<String, List<SqlJoin>> dependentAliasJoinMap) throws ClassNotFoundException {
        if (aliasName.equalsIgnoreCase(rootAlias))
            return rootClazz;
        SqlJoin desiredSqlJoin = findSqlJoinFromMap(dependentAliasJoinMap, aliasName);

        final Stack<SqlJoin> stack = new StackImpl<>();
        if (desiredSqlJoin == null)
            throw new SecurityException("Your Provided alias[" + aliasName + "] doesn't indicate any relation");
        do {
            stack.push(desiredSqlJoin);
            if (desiredSqlJoin.getDependentAlias().equalsIgnoreCase(rootAlias)) break;
            SqlJoin sqlJoin = findSqlJoinFromMap(dependentAliasJoinMap, desiredSqlJoin.getDependentAlias());
            if (sqlJoin == null)
                throw new SecurityException("Your provided alias:[" + desiredSqlJoin.getAlias() + "] depends on alias: [" + desiredSqlJoin.getDependentAlias() + "] Which doesn't have any relation definition of SqlJoin");
            desiredSqlJoin = sqlJoin;
        } while (true);

        Class searchClass = rootClazz;
        while (!stack.isEmpty()) {
            SqlJoin sqlJoin = stack.pop();
            Field field = ClassAccess.getField(searchClass, sqlJoin.getRelationName());
            if (isListTypeRelation(field)) {
                FieldAccessor fieldAccessor = new ForceFieldAccessor(field);
                searchClass = resolveClass(fieldAccessor.actualTypeParameters()[0].getTypeName());
            } else if (isSingleRelation(field)) searchClass = field.getType();
            else throw new SecurityException("The Alias:[" + sqlJoin.getAlias() + "] Doesn't have any relation");
        }

        return searchClass;
    }

    private boolean isListTypeRelation(Field field) {
        return field.isAnnotationPresent(ManyToMany.class) || field.isAnnotationPresent(OneToMany.class);
    }

    private boolean isSingleRelation(Field field) {
        return field.isAnnotationPresent(ManyToOne.class);
    }

    private Class resolveClass(String typeName) throws ClassNotFoundException {
        return Class.forName(typeName);
    }

    private SqlJoin findSqlJoinFromMap(Map<String, List<SqlJoin>> dependentAliasJoinMap, String aliasName) {
        for (List<SqlJoin> sqlJoins : dependentAliasJoinMap.values()) {
            for (SqlJoin sqlJoin : sqlJoins) {
                if (sqlJoin.getAlias().equalsIgnoreCase(aliasName)) {
                    return sqlJoin;
                }
            }
        }
        return null;
    }
}
