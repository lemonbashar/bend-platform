package bend.library.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import java.time.LocalDate;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 1/29/2020
 */
@AllArgsConstructor
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

    @CreationTimestamp
    @Column(name = "CREATE_DATE", updatable = false)
    private LocalDate createDate;

    @UpdateTimestamp
    @Column(name = "UPDATE_DATE")
    private LocalDate updateDate;

    @Value("true")
    @Column(name = "ACTIVE_STATUS")
    private boolean active;

    public BaseEntity() {
        this.active = true;
        this.createDate = LocalDate.now();
        this.updateDate = LocalDate.now();
    }

    public BaseEntity(User createBy, User updateBy) {
        this();
        this.createBy = createBy;
        this.updateBy = updateBy;
    }

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
        return getId().hashCode();
    }
}
