package bend.library.data.fetch.fetch;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.Arrays;
import java.util.List;

/**
 * Suppose We Want to fetch current user's authority_name list, so we have the SqlFetchDefinition
 *
 * <code>
 * SqlFetchDefinition{
 * key:'AK' #It Would Be Anything, actually it is used to identify with response
 * domain:'User'
 * columns:['auth.name']
 * condition:'model.username=:usrName'
 * alias:'model'
 * joins: {
 * joinType=JoinType.INNER_JOIN
 * dependentAlias=model #Cause, authorities is a field name of User table and model is an alias of User
 * relationName=authorities
 * alias=auth
 * }
 * parameters:[
 * {
 * name:'usrName'
 * value:'SPEL:@authService.currentUsername()'
 * }
 * ]
 * }
 * </code>
 */
@Setter
@Getter
@NoArgsConstructor
public class SqlFetchDefinition extends FetchDefinition {
    private String[] columns;
    private String condition;
    @NotNull
    private String alias = "model";
    private SqlJoin[] joins;
    private String orderBy;
    /**
     * A Key-value pair of parameters where the value accept spring EL-Expression also
     * if the value is spel, then it must be started with SPEL: like you want to add
     * current userId, then use, param.put("uid","SPEL:@authService.currentUserId()")
     */
    private List<Parameter> parameters;
    private boolean isNative;

    SqlFetchDefinition(String[] columns, String condition, String alias, SqlJoin[] joins, String orderBy, List<Parameter> parameters, boolean isNative) {
        this.columns = columns;
        this.condition = condition;
        this.alias = alias;
        this.joins = joins;
        this.orderBy = orderBy;
        this.parameters = parameters;
        this.isNative = isNative;
    }

    public static SqlFetchDefinition.SqlFetchDefinitionBuilder builder() {
        return new SqlFetchDefinition.SqlFetchDefinitionBuilder();
    }

    public static class SqlFetchDefinitionBuilder {
        private String[] columns;
        private String condition;
        private String alias;
        private SqlJoin[] joins;
        private String orderBy;
        private List<Parameter> parameters;
        private boolean isNative = false;

        SqlFetchDefinitionBuilder() {
        }

        public SqlFetchDefinition.SqlFetchDefinitionBuilder columns(String[] columns) {
            this.columns = columns;
            return this;
        }

        public SqlFetchDefinition.SqlFetchDefinitionBuilder isNative(boolean isNative) {
            this.isNative = isNative;
            return this;
        }

        public SqlFetchDefinition.SqlFetchDefinitionBuilder condition(String condition) {
            this.condition = condition;
            return this;
        }

        public SqlFetchDefinition.SqlFetchDefinitionBuilder alias(String alias) {
            this.alias = alias;
            return this;
        }

        public SqlFetchDefinition.SqlFetchDefinitionBuilder joins(SqlJoin[] joins) {
            this.joins = joins;
            return this;
        }

        public SqlFetchDefinition.SqlFetchDefinitionBuilder orderBy(String orderBy) {
            this.orderBy = orderBy;
            return this;
        }

        public SqlFetchDefinition.SqlFetchDefinitionBuilder parameters(List<Parameter> parameters) {
            this.parameters = parameters;
            return this;
        }

        public SqlFetchDefinition build() {
            return new SqlFetchDefinition(this.columns, this.condition, this.alias, this.joins, this.orderBy, this.parameters, isNative);
        }

        public String toString() {
            String var10000 = Arrays.deepToString(this.columns);
            return "SqlFetchDefinition.SqlFetchDefinitionBuilder(columns=" + var10000 + ", condition=" + this.condition + ", alias=" + this.alias + ", joins=" + Arrays.deepToString(this.joins) + ", orderBy=" + this.orderBy + ", parameters=" + this.parameters + ")";
        }
    }
}
