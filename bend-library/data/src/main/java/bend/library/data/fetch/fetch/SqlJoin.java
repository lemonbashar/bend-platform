package bend.library.data.fetch.fetch;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Use to define SQL Joins, Suppose we have a query for user and the sql is
 * <p>
 * SELECT [SELECTIONS] FROM User model
 * And we want to join with authorities so Sql join would be.
 * <p>
 * joinType=JoinType.INNER_JOIN
 * dependentAlias=model
 * relationName=authorities
 * alias=auth
 */
@Setter
@Getter
@NoArgsConstructor
public class SqlJoin {
    private JoinType joinType;
    private String dependentAlias;
    private String relationName;
    private String alias;

    @Override
    public String toString() {
        return joinType.name().replace('_', ' ') + " " + dependentAlias + "." + relationName + " "+ alias;
    }
}
