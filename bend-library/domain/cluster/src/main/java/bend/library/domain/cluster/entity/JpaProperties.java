package bend.library.domain.cluster.entity;

import bend.library.domain.entity.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Table(name = "DB_CLUSTER_JPA_PROPERTIES")
@Entity
public class JpaProperties extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID=1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "DB_CLUSTER_JPA_PROPERTIES_PK")
    @SequenceGenerator(name = "DB_CLUSTER_JPA_PROPERTIES_PK", sequenceName = "DB_CLUSTER_JPA_PROPERTIES_SEQ", allocationSize = 1)
    private BigInteger id;

    @Column(name = "PROPERTY_KEY")
    private String propertyKey;

    @Column(name = "PROPERTY_VALUE")
    private String propertyValue;

    @ManyToOne
    @JoinColumn(name = "DATABASE_CONFIG_ID")
    private DatabaseConfig databaseConfig;
}
