package bend.library.domain.cluster.entity;

import bend.library.annotation.prepersist.SelfPrePersist;
import bend.library.domain.cluster.enumeretion.DatabasePropertyType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@NoArgsConstructor
@Setter
@Getter
@SelfPrePersist
@Table(name = "DB_CLUSTER_JPA_PROPERTIES", uniqueConstraints = @UniqueConstraint(name = "UK_PROPERTY_KEY_N_PROPERTY_VALUE_N_PROPERTY_TYPE", columnNames = {"PROPERTY_KEY", "PROPERTY_VALUE", "PROPERTY_TYPE"}))
@Entity
public class JpaProperties extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_CLUSTER_JPA_PROPERTIES")
    @SequenceGenerator(name = "PK_DB_CLUSTER_JPA_PROPERTIES", sequenceName = "DB_CLUSTER_JPA_PROPERTIES_SEQ", allocationSize = 1)
    private BigInteger id;

    @Column(name = "PROPERTY_KEY", nullable = false, length = 64)
    private String propertyKey;

    @Column(name = "PROPERTY_VALUE", length = 255, nullable = false)
    private String propertyValue;

    @Column(name = "PROPERTY_TYPE", nullable = false, length = 16)
    @Enumerated(EnumType.STRING)
    private DatabasePropertyType propertyType = DatabasePropertyType.NATIVE;

    public JpaProperties(String propertyKey, String propertyValue, DatabasePropertyType propertyType) {
        this.propertyKey = propertyKey;
        this.propertyValue = propertyValue;
        this.propertyType = propertyType;
    }
}
