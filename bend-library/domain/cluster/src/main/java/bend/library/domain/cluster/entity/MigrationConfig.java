package bend.library.domain.cluster.entity;

import bend.library.annotation.prepersist.SelfPrePersist;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@NoArgsConstructor
@EqualsAndHashCode(callSuper = true, of = {"id", "migrationName"})
@Setter
@Getter
@SelfPrePersist
@Table(name = "DB_CLUSTER_MIGRATION_CONFIG")
@Entity
public class MigrationConfig extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_CLUSTER_MIGRATION_CONFIG")
    @SequenceGenerator(name = "PK_DB_CLUSTER_MIGRATION_CONFIG", sequenceName = "DB_CLUSTER_MIGRATION_CONFIG_SEQ", allocationSize = 1)
    private BigInteger id;

    @Column(name = "MIGRATION_NAME", length = 64, nullable = false)
    private String migrationName;

    @Column(name = "MIGRATION_PATH", nullable = false, length = 64)
    private String migrationPath;

    /**
     * Sometimes we need some extra data to complete migration, like iun liquibase
     * we need tag, contexts etc, but in flyway we need nothing like tag or contexts but we need something
     * other types of values, but here the domain is common, so we need to solve both of them requirements
     * using this one domain. so we have one solutions we put extra values as string separated
     * <p>
     * Here we put those values as key-value paired like key:value key1:value1
     * like for liquibase properties are: tag:tagName context:contextOne context:contextTwo
     */
    @Column(name = "MIGRATION_PROPERTIES", length = 128)
    private String migrationProperties;
}
