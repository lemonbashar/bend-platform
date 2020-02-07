package bend.library.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigInteger;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 1/29/2020
 */
@Setter
@Getter
@Table(name = "MULTI_TENANT_DATA_SOURCE")
@Entity
public class MultiTenantDatasource extends BaseEntity<BigInteger> {
    @Id
    private BigInteger id;

    private String jdbcUrl;
    private String username;
    private String password;
}
