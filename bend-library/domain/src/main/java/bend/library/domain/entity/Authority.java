package bend.library.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigInteger;
import java.time.LocalDate;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/16/2020
 */

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Table(name = "AUTHORITY")
@Entity
public class Authority extends BaseEntity<BigInteger> {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "AUTHORITY_PK")
    @SequenceGenerator(name = "AUTHORITY_PK", sequenceName = "AUTHORITY_SEQ", allocationSize = 1)
    private BigInteger id;

    @Column(name = "AUTHORITY_NAME")
    private String authority;

    public Authority(User createBy, String authority) {
        super(createBy, null, LocalDate.now(), null, true);
        this.authority = authority;
    }
}
