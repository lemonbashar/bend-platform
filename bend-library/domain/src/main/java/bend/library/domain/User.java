package bend.library.domain;

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
@Table(name = "BEND_USER")
@Entity
public class User extends BaseEntity<BigInteger> {
    @Id
    private BigInteger id;

    @Size(min = 5, max = 32, message = "Username length must be in between 4 ~ 32 ")
    @Column(name = "USERNAME")
    private String username;

    @Email
    @Column(name = "EMAIL")
    private String email;
}
