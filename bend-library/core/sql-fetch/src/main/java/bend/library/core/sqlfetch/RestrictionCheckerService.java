package bend.library.core.sqlfetch;


import bend.library.data.fetch.fetch.SqlFetchDefinition;

public interface RestrictionCheckerService {
    boolean isAllow(SqlFetchDefinition fetchDefinition) throws ClassNotFoundException;
}
