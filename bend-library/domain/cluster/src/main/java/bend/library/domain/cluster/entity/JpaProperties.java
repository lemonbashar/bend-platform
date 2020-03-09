package bend.library.domain.cluster.entity;

import bend.library.domain.cluster.enumeretion.DatabasePropertyType;
import bend.library.domain.entity.BaseEntity;
import bend.library.domain.entity.User;
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
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "DB_CLUSTER_JPA_PROPERTIES_PK")
    @SequenceGenerator(name = "DB_CLUSTER_JPA_PROPERTIES_PK", sequenceName = "DB_CLUSTER_JPA_PROPERTIES_SEQ", allocationSize = 1)
    private BigInteger id;

    @Column(name = "PROPERTY_KEY")
    private String propertyKey;

    @Column(name = "PROPERTY_VALUE")
    private String propertyValue;

    @Column(name = "PROPERTY_TYPE")
    private DatabasePropertyType propertyType = DatabasePropertyType.NATIVE;

    public JpaProperties(User user, String propertyKey, String propertyValue) {
        this(user, propertyKey, propertyValue, DatabasePropertyType.NATIVE);
    }

    public JpaProperties(User actorUser, String propertyKey, String propertyValue, DatabasePropertyType propertyType) {
        super(actorUser, null);
        this.propertyKey = propertyKey;
        this.propertyValue = propertyValue;
        this.propertyType = propertyType;
    }
}
