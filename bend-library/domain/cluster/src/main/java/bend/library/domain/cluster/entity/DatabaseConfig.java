package bend.library.domain.cluster.entity;

import bend.framework.properties.springproperties.database.DatabaseType;
import bend.library.annotation.prepersist.SelfPrePersist;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@Setter
@Getter
@SelfPrePersist
@Table(name = "DB_CLUSTER_DATABASE_CONFIG", uniqueConstraints = @UniqueConstraint(name = "UK_DATABASE_SCHEMA_N_DATABASE_HOST_N_DATABASE_TYPE", columnNames = {"DATABASE_SCHEMA", "DATABASE_HOST", "DATABASE_TYPE"}))
@Entity
public class DatabaseConfig extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_CLUSTER_DATABASE_CONFIG")
    @SequenceGenerator(name = "PK_DB_CLUSTER_DATABASE_CONFIG", sequenceName = "DB_CLUSTER_DATABASE_CONFIG_SEQ", allocationSize = 1)
    private BigInteger id;

    @Column(name = "DATABASE_SCHEMA", nullable = false, length = 64)
    private String schema;

    @Column(name = "USERNAME", nullable = false, length = 64)
    private String username;

    @Column(name = "PASSWORD", nullable = false, length = 255)
    private String password;

    @Column(name = "DATABASE_HOST", nullable = false, length = 64)
    private String host;

    @Enumerated(EnumType.STRING)
    @Column(name = "DATABASE_TYPE", nullable = false, length = 16)
    private DatabaseType databaseType;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "JT_DB_CLUSTER_DATABASE_CONFIG_X_DB_CLUSTER_JPA_PROPERTIES", uniqueConstraints = @UniqueConstraint(name = "DATABASE_CONFIG_JPA_PROPERTIES_UNIQUE_KEY", columnNames = {"DATABASE_CONFIG_ID", "JPA_PROPERTIES_ID"}), joinColumns = @JoinColumn(name = "DATABASE_CONFIG_ID", referencedColumnName = "ID", nullable = false), inverseJoinColumns = @JoinColumn(name = "JPA_PROPERTIES_ID", referencedColumnName = "ID", nullable = false))
    private Set<JpaProperties> databaseProperties = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "MIGRATION_CONFIG_ID")
    private MigrationConfig migrationConfig;



    public DatabaseConfig(String schema, String username, String password, String host, DatabaseType databaseType, Set<JpaProperties> databaseProperties) {
        this.schema = schema;
        this.username = username;
        this.password = password;
        this.host = host;
        this.databaseType = databaseType;
        this.databaseProperties = databaseProperties;
    }
}
