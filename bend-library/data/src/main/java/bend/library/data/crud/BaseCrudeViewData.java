package bend.library.data.crud;

import bend.library.data.BaseData;
import lombok.Getter;

import java.math.BigInteger;

@Getter
public class BaseCrudeViewData extends BaseData<BigInteger> {
    protected final boolean active;
    protected final String primary;
    protected final String secondary;

    public BaseCrudeViewData(BigInteger id, boolean active, String primary, String secondary) {
        super(id);
        this.active = active;
        this.primary = primary;
        this.secondary = secondary;
    }
}
