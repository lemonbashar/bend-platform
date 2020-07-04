package bend.library.domain.data;

import bend.library.data.crud.BaseCrudData;
import bend.library.domain.entity.Authority;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.NonNull;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.math.BigInteger;
import java.sql.ResultSet;
import java.sql.SQLException;
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

    public static UserCrudData mapRowBasic(@NonNull ResultSet rs, int rowNum) throws SQLException {
        var userCrudData = new UserCrudData();
        userCrudData.setId(new BigInteger(rs.getString("id")));
        userCrudData.setEmail(rs.getString("email"));
        userCrudData.setPassword(rs.getString("password"));
        userCrudData.setUsername(rs.getString("username"));
        return userCrudData;
    }
}
