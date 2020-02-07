package bend.library.domain.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
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
@Table(name = "BEND_USER")
@Entity
public class User extends BaseEntity<BigInteger> {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "BEND_USER_PK")
    @SequenceGenerator(name = "BEND_USER_PK", sequenceName = "BEND_USER_SEQ", allocationSize = 1)
    private BigInteger id;

    @Size(min = 5, max = 32, message = "Username length must be in between 4 ~ 32 ")
    @Column(name = "USERNAME", unique = true)
    private String username;

    @Email
    @Column(name = "EMAIL", unique = true)
    private String email;
}
