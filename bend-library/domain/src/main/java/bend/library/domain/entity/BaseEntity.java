package bend.library.domain.entity;

import bend.library.data.crud.BaseCrudData;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Objects;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 1/29/2020
 */
@NoArgsConstructor
@Setter
@Getter
@MappedSuperclass
public abstract class BaseEntity<ID> {

    @ManyToOne
    @JoinColumn(name = "CREATE_BY")
    private User createBy;

    @ManyToOne
    @JoinColumn(name = "UPDATE_BY")
    private User updateBy;

    @Column(name = "CREATE_DATE", updatable = false, nullable = false)
    private LocalDate createDate;

    @Column(name = "UPDATE_DATE")
    private LocalDate updateDate;

    @Column(name = "ACTIVE_STATUS")
    private Boolean active;

    public abstract ID getId();

    public abstract void setId(ID id);

    public Boolean isActive() {
        return active == null ? false : active;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BaseEntity<?> that = (BaseEntity<?>) o;

        return getId().equals(that.getId());
    }

    @Override
    public int hashCode() {
        return Objects.isNull(getId()) ? super.hashCode() : getId().hashCode();
    }

    public BaseCrudData toData() {
        return new BaseCrudData((BigInteger) getId(), isActive(), createDate, updateDate, Objects.isNull(createBy)?null:createBy.getUsername(), Objects.isNull(updateBy)?null: createBy.getUsername());
    }
}
