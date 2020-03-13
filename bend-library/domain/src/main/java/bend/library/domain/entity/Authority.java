package bend.library.domain.entity;

import bend.library.annotation.prepersist.PrePersist;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
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
@PrePersist
@Table(name = "DB_MAIN_AUTHORITY")
@Entity
public class Authority extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_MAIN_AUTHORITY")
    @SequenceGenerator(name = "PK_DB_MAIN_AUTHORITY", sequenceName = "DB_MAIN_AUTHORITY_SEQ", allocationSize = 1)
    private BigInteger id;

    @Column(name = "AUTHORITY_NAME", nullable = false, length = 32)
    private String name;


    public Authority(User createBy, String name) {
        super(createBy, null, LocalDate.now(), null, true);
        this.name = name;
    }
}
