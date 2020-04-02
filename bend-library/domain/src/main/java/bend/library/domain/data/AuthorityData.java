package bend.library.domain.data;

import bend.library.data.BaseData;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;

@Getter
@Setter
public class AuthorityData extends BaseData<BigInteger> {
    private String name;
}
