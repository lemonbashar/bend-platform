package bend.library.data.fetch.fetch;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

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
@Builder
public class SqlFetchDefinition extends FetchDefinition {
    private String[] columns;
    private String condition;
    private String alias = "model";
    private SqlJoin[] joins;
    private String orderBy;
    /**
     * A Key-value pair of parameters where the value accept spring EL-Expression also
     * if the value is spel, then it must be started with SPEL: like you want to add
     * current userId, then use, param.put("uid","SPEL:@authService.currentUserId()")
     */
    private List<Parameter> parameters;
}
