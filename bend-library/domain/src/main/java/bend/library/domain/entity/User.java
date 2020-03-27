package bend.library.domain.entity;

import bend.library.annotation.Restrictions;
import bend.library.annotation.prepersist.AutoActive;
import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.annotation.prepersist.PrePersist;
import bend.library.constant.SpringElConstants;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 1/29/2020
 */
@NoArgsConstructor
@Setter
@Getter
@Restrictions(canFetch = SpringElConstants.Security.IS_SUPER_ADMIN, restrictedFields = "@securityService.isAnyAdmin()?{'password'}:{'password','email','authorities'}", restrictedFieldsIfErrorOccurred = {"password", "email", "authorities"})
@PrePersist(isUpdatable = SpringElConstants.User.WHEN_USER_IS_NOT_SYSTEM)
@AutoActive
@AutoUpdate
@AutoCreate
@Table(name = "DB_MAIN_BEND_USER")
@Entity
public class User extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_MAIN_BEND_USER")
    @SequenceGenerator(name = "PK_DB_MAIN_BEND_USER", sequenceName = "DB_MAIN_BEND_USER_SEQ", allocationSize = 1)
    private BigInteger id;

    @Size(min = 4, max = 32, message = "Username length must be in between 4 ~ 32 ")
    @Column(name = "USERNAME", unique = true)
    private String username;

    @Column(name = "PASSWORD", unique = true, length = 255, nullable = false)/*TODO: USE SALT TO UNIQUE THE PASSWORD*/
    private String password;

    @Email
    @Column(name = "EMAIL", unique = true, nullable = false, length = 32)
    private String email;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "JT_DB_MAIN_BEND_USER_X_DB_MAIN_AUTHORITY", uniqueConstraints = @UniqueConstraint(name = "USER_ID_AUTHORITY_UNIQUE_KEY", columnNames = {"BEND_USER_ID", "AUTHORITY_NAME"}), joinColumns = @JoinColumn(name = "BEND_USER_ID", referencedColumnName = "ID", nullable = false), inverseJoinColumns = @JoinColumn(name = "AUTHORITY_NAME", referencedColumnName = "AUTHORITY_NAME", nullable = false))
    private Set<Authority> authorities = new HashSet<>();

    public User(BigInteger id) {
        this.id = id;
    }

    public User(@Size(min = 5, max = 32, message = "Username length must be in between 4 ~ 32 ") String username, String password, @Email String email, String ...authorities) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.authorities = Stream.of(authorities).map(Authority::new).collect(Collectors.toSet());
    }
    public User(@Size(min = 5, max = 32, message = "Username length must be in between 4 ~ 32 ") String username, String password, @Email String email, Set<Authority> authorities) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.authorities = authorities;
    }
}
