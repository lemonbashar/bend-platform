package bend.library.domain.data;

import bend.library.data.crud.BaseCrudData;
import bend.library.domain.entity.Authority;
import bend.library.domain.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserCrudData extends BaseCrudData {
    @NotNull
    private String username;
    @NotNull
    @Email
    private String email;
    @NotNull
    private String password;

    private String[] authorities;

    public UserCrudData(User user) {
        this(user.getId(), user.getCreateDate(), user.getUpdateDate(), user.getCreateBy(), user.getUpdateBy(), user.getUsername(), user.getEmail(), user.getAuthorities());
    }

    public UserCrudData(BigInteger id, @NotNull String username, @NotNull @Email String email) {
        super(id);
        this.username = username;
        this.email = email;
    }

    public UserCrudData(BigInteger id, LocalDate createDate, LocalDate updateDate, User createBy, User updateBy, @NotNull String username, @NotNull @Email String email, Set<Authority> authorities) {
        super(id, createDate, updateDate, Objects.isNull(createBy) ? null : createBy.getUsername(), Objects.isNull(updateBy) ? null : updateBy.getUsername());
        this.username = username;
        this.email = email;
        this.authorities = authorities.stream().map(Authority::getName).collect(Collectors.toList()).toArray(new String[0]);
    }

    public UserCrudData(BaseCrudData baseCrudData, @NotNull String username, @NotNull @Email String email, Set<Authority> authorities) {
        super(baseCrudData);
        this.username = username;
        this.email = email;
        this.authorities = authorities.stream().map(Authority::getName).collect(Collectors.toList()).toArray(new String[0]);
    }
}
