package bend.library.config.security.registry.enumeretion;

/**
 * Sometimes we need to detecting database by using various method's like.
 * based on username of user, based on organization name of requesting organization, based on requesting country and others method ...
 * for this reason we need detection type.
 */
public enum RegistryDetectionType {
    BY_USERNAME,
    BY_COUNTRY
}
