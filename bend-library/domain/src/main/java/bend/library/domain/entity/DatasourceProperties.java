package bend.library.domain.entity;

import bend.library.domain.enumeretion.PropertiesType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigInteger;

/**
 * Use to manage multi-tenant database connection. with hikariCP and this table is the mapping
 * of hibernate and japa connection properties, like
 * key=hbm2ddl.auto, value=update, propertiesType=PropertiesType.HIBERNATE_PROPERTIES
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 1/29/2020
 */
@Setter
@Getter
@Table(name = "DATASOURCE_PROPERTIES")
@Entity
public class DatasourceProperties extends BaseEntity<BigInteger> {
    @Id
    private BigInteger id;

    private String key;
    private String value;
    private PropertiesType propertiesType;
}
