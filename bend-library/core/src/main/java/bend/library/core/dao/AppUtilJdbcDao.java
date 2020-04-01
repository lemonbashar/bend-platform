package bend.library.core.dao;


import bend.library.data.fetch.FieldDefinition;

public interface AppUtilJdbcDao {
    boolean isExistFieldValue(String table, String field, String value);

    void updateValue(FieldDefinition fieldDefinition);
}
