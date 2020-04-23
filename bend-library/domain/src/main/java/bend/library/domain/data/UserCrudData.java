package bend.library.domain.data;

import bend.library.data.crud.BaseCrudData;
import bend.library.domain.entity.Authority;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserCrudData extends BaseCrudData {
    @NotNull
    private String username;
    @NotNull
    @Email
    private String email;
    @NotNull
    private String password;

    private String[] authorities;

    public UserCrudData(BaseCrudData baseCrudData, @NotNull String username, @NotNull @Email String email, Set<Authority> authorities) {
        super(baseCrudData);
        this.username = username;
        this.email = email;
        this.authorities = authorities.stream().map(Authority::getName).toArray(String[]::new);
    }
}
