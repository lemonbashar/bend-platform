package bend.library.core.sqlfetch.sql;

import bend.library.config.el.SpringElEvaluator;
import bend.library.constant.BaseConstants;
import bend.library.constant.SpringElConstants;
import bend.library.core.sqlfetch.RestrictionCheckerService;
import bend.library.core.sqlfetch.SqlFetchService;
import bend.library.data.fetch.fetch.FetchResponse;
import bend.library.data.fetch.fetch.SqlFetchDefinition;
import bend.library.data.fetch.fetch.SqlJoin;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@SuppressWarnings("StringBufferReplaceableByString")
@Log4j2
@RequiredArgsConstructor
@Service
public class SqlFetchResponseServiceImpl implements SqlFetchService {
    private final @NonNull SpringElEvaluator springElEvaluator;
    private final @NonNull RestrictionCheckerService restrictionCheckerService;

    @PersistenceContext(unitName = BaseConstants.ROUTING_JPA_UNIT)
    private EntityManager entityManager;

    @Override
    public FetchResponse fetch(SqlFetchDefinition fetchDefinition) {
        try {
            if (!restrictionCheckerService.isAllow(fetchDefinition))
                throw new SecurityException("The Query contain some restricted field fetch request");
        } catch (ClassNotFoundException e) {
            log.error(e);
            throw new SecurityException("ClassNotFoundException:The Query contain some restricted field fetch request");
        }
        String sql = createSql(fetchDefinition);
        FetchResponse response = FetchResponse.builder().key(fetchDefinition.getKey()).build();
        try {
            Query query = entityManager.createQuery(sql);
            if (fetchDefinition.getParameters() != null) {
                fetchDefinition.getParameters()
                        .forEach(item -> {
                            if (item.getValue().startsWith(SpringElConstants.SPEL_PREFIX))
                                query.setParameter(item.getName(), springElEvaluator.evaluate(Object.class, item.getValue().substring(SpringElConstants.SPEL_PREFIX.length()), () -> null, null));
                            else query.setParameter(item.getName(), item.getValue());
                        });
            }
            response.setData(query.getResultList());
        } catch (Exception e) {
            log.error(e);
            throw new SecurityException(e);
        }

        return response;
    }

    private String createSql(SqlFetchDefinition fetchDefinition) {
        StringBuilder builder = new StringBuilder();
        builder.append("SELECT ").append(buildColumns(fetchDefinition.getColumns(), fetchDefinition.getAlias())).append(" FROM ")
                .append(fetchDefinition.getDomain())
                .append(" ").append(fetchDefinition.getAlias())
                .append(" ").append(joins(fetchDefinition.getJoins()))
                .append(condition(fetchDefinition.getCondition()))
                .append(orderBy(fetchDefinition.getOrderBy()));
        return builder.toString();
    }

    private String orderBy(String orderBy) {
        if (orderBy != null && orderBy.length() > 2)
            return " ORDER BY " + orderBy;
        return "";
    }

    private String condition(String condition) {
        if (condition != null && condition.length() > 2)
            return " WHERE " + condition;
        return "";
    }

    private String joins(SqlJoin[] joins) {
        if (joins == null || joins.length == 0) return "";
        StringBuilder builder = new StringBuilder();
        int i = 0;
        for (; i < joins.length - 1; i++)
            builder.append(joins[i]).append(" ");
        return builder.append(joins[i]).toString();
    }

    private String buildColumns(String[] columns, String alias) {
        if (columns == null || columns.length == 0) return alias;
        StringBuilder builder = new StringBuilder();
        int i = 0;
        for (; i < columns.length - 1; i++)
            builder.append(columns[i]).append(", ");
        return builder.append(columns[i]).toString();
    }
}
