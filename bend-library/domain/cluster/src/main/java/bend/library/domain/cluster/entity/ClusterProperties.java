/*
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
@Table(name = "DB_CLUSTER_CLUSTER_PROPERTIES")
@Entity
public class ClusterProperties extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "DB_CLUSTER_CLUSTER_PROPERTIES_PK")
    @SequenceGenerator(name = "DB_CLUSTER_CLUSTER_PROPERTIES_PK", sequenceName = "DB_CLUSTER_CLUSTER_PROPERTIES_SEQ", allocationSize = 1)
    private BigInteger id;

    */
/**
 * Here our cluster prefix aim to use for multi transactional use, actually.
 * Suppose we want to make 5 database run under transaction A and 4 under transaction B, and this cluster prefix is used
 * for managing to create transaction name , bean name etc...
 *//*

    @Column(name = "CLUSTER_PREFIX")
    private String clusterPrefix;

    @Transient
    public String transactionName() {
        return "TRANSACTION-" + this.clusterPrefix.toUpperCase();
    }

    @Transient
    public String beanName() {
        return "BEAN-" + this.clusterPrefix.toUpperCase();
    }
}
*/
