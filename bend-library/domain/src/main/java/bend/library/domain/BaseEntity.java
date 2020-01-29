package bend.library.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.MappedSuperclass;
import java.math.BigInteger;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 1/29/2020
 */
@Setter
@Getter
@MappedSuperclass
public abstract class BaseEntity {
    private BigInteger id;
}
