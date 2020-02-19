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
@Table(name = "DB_CLUSTER_DATABASE_CONFIG")
@Entity
public class DatabaseConfig extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID=1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "DB_CLUSTER_DATABASE_CONFIG_PK")
    @SequenceGenerator(name = "DB_CLUSTER_DATABASE_CONFIG_PK", sequenceName = "DB_CLUSTER_DATABASE_CONFIG_SEQ", allocationSize = 1)
    private BigInteger id;

    @Column(name = "DATABASE_NAME")
    private String databaseName;

    @Column(name = "USERNAME")
    private String username;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "JDBC_DRIVER")
    private String jdbcDriver;
}
