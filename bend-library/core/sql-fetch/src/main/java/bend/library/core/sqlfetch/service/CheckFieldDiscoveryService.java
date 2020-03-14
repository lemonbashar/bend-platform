package bend.library.core.sqlfetch.service;


import bend.library.data.fetch.FieldDefinition;

/**
 * Use to check that a field is discoverable publicly or authorized person.
 * Cause client side use a dynamic url where it send a table name and a actual field name, to check existence
 * or other business logic.
 */
public interface CheckFieldDiscoveryService {
    /**
     * Check that the field is discoverable or not by current user
     *
     * @param domainName Name of the domain
     * @param fieldName  Name of the field
     * @return true if field is discoverable of existence by current user.
     */
    boolean isDiscoverableExistence(String domainName, String fieldName);

    boolean isDiscoverableEdit(FieldDefinition fieldDefinition);
}
