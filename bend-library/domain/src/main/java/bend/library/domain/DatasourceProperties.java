package bend.library.domain;

import bend.library.domain.enumeretion.PropertiesType;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.math.BigInteger;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 1/29/2020
 */
@Setter
@Getter
@Table(name = "DATASOURCE_PROPERTIES")
@Entity
public class DatasourceProperties extends BaseEntity {
    @Id
    private BigInteger id;

    private String key;
    private String value;
    private PropertiesType propertiesType;
}
