package bend.library.domain.cluster.entity;

import bend.library.annotation.prepersist.AutoActive;
import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.annotation.prepersist.PrePersist;
import bend.library.domain.cluster.enumeretion.MigrationType;
import bend.library.domain.entity.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@NoArgsConstructor
@Setter
@Getter
@PrePersist
@AutoActive
@AutoCreate
@AutoUpdate
@Table(name = "DB_CLUSTER_MIGRATION_CONFIG", uniqueConstraints = @UniqueConstraint(name = "UK_MIGRATION_TYPE_N_DATABASE_CONFIG_ID", columnNames = {"MIGRATION_TYPE", "DATABASE_CONFIG_ID"}))
@Entity
public class MigrationConfig extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_CLUSTER_MIGRATION_CONFIG")
    @SequenceGenerator(name = "PK_DB_CLUSTER_MIGRATION_CONFIG", sequenceName = "DB_CLUSTER_MIGRATION_CONFIG_SEQ", allocationSize = 1)
    private BigInteger id;

    @Enumerated(EnumType.STRING)
    @Column(name = "MIGRATION_TYPE", nullable = false, length = 64)
    private MigrationType migrationType;

    @Column(name = "MIGRATION_PATH", nullable = false, length = 64)
    private String migrationPath;

    @JoinColumn(name = "DATABASE_CONFIG_ID")
    @OneToOne
    private DatabaseConfig databaseConfig;
}
