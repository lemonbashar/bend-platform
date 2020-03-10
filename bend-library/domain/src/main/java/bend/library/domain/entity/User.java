package bend.library.domain.entity;

import bend.library.annotation.prepersist.PrePersist;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 1/29/2020
 */
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@PrePersist
@Table(name = "DB_MAIN_BEND_USER")
@Entity
public class User extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "DB_MAIN_BEND_USER_PK")
    @SequenceGenerator(name = "DB_MAIN_BEND_USER_PK", sequenceName = "DB_MAIN_BEND_USER_SEQ", allocationSize = 1)
    private BigInteger id;

    @Size(min = 5, max = 32, message = "Username length must be in between 4 ~ 32 ")
    @Column(name = "USERNAME", unique = true)
    private String username;

    @Column(name = "PASSWORD", unique = true)/*TODO: USE SALT TO UNIQUE THE PASSWORD*/
    private String password;

    @Email
    @Column(name = "EMAIL", unique = true)
    private String email;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "JT_DB_MAIN_BEND_USER_X_DB_MAIN_AUTHORITY", uniqueConstraints = @UniqueConstraint(name = "USER_ID_AUTHORITY_UNIQUE_KEY", columnNames = {"BEND_USER_ID", "AUTHORITY_NAME"}), joinColumns = @JoinColumn(name = "BEND_USER_ID", referencedColumnName = "ID", nullable = false), inverseJoinColumns = @JoinColumn(name = "AUTHORITY_NAME", referencedColumnName = "AUTHORITY_NAME", nullable = false))
    private Set<Authority> authorities = new HashSet<>();

    public User(String username, String encodedPassword, String email, Set<Authority> authorities, User createdBy) {
        super(createdBy, null, LocalDate.now(), LocalDate.now(), true);
        this.username = username;
        this.password = encodedPassword;
        this.email = email;
        this.authorities = authorities;
    }

    public User(BigInteger id) {
        this.id = id;
    }
}
