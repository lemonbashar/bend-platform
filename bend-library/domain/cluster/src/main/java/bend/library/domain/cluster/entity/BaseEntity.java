package bend.library.domain.cluster.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Objects;

@NoArgsConstructor
@Setter
@Getter
@MappedSuperclass
public abstract class BaseEntity<ID> {

    @Column(name = "CREATE_BY")
    private BigInteger createBy;

    @Column(name = "UPDATE_BY")
    private BigInteger updateBy;

    @Column(name = "CREATE_DATE", updatable = false, nullable = false)
    private LocalDate createDate;

    @Column(name = "UPDATE_DATE")
    private LocalDate updateDate;

    @Column(name = "ACTIVE_STATUS")
    private boolean active;

    public abstract ID getId();

    public abstract void setId(ID id);

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

    public void prePersist() {
        if(getId() == null) {
            setCreateBy(BigInteger.ONE);
            setCreateDate(LocalDate.now());
        }
        else {
            setUpdateBy(BigInteger.ONE);
            setUpdateDate(LocalDate.now());
        }
        setActive(true);
    }
}

