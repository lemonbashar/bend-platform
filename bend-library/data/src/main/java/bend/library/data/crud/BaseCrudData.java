package bend.library.data.crud;

import bend.library.data.BaseData;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Objects;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BaseCrudData extends BaseData<BigInteger> {
    protected LocalDate lastChangedDate;
    protected String lastChangedBy;

    public BaseCrudData(BigInteger id, boolean active) {
        super(id, active);
    }

    public BaseCrudData(BigInteger id, boolean active, LocalDate lastChangedDate, String lastChangedBy) {
        super(id, active);
        this.lastChangedDate = lastChangedDate;
        this.lastChangedBy = lastChangedBy;
    }

    public BaseCrudData(BigInteger id, boolean active, LocalDate createData, LocalDate updateDate, String createBy, String updateBy) {
        super(id, active);
        this.lastChangedDate = Objects.nonNull(updateDate) ? updateDate : createData;
        this.lastChangedBy = Objects.nonNull(updateBy) ? updateBy : createBy;
    }

    public BaseCrudData(BaseCrudData baseCrudData) {
        this(baseCrudData.id, baseCrudData.isActive(), baseCrudData.getLastChangedDate(), baseCrudData.getLastChangedBy());
    }
}
