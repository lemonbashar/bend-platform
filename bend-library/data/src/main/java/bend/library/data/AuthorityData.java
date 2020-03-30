package bend.library.data;

import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;

@Getter
@Setter
public class AuthorityData extends BaseData<BigInteger> {
    private String name;
}
