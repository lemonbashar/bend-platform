package bend.library.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
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
@NoArgsConstructor
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

    public abstract ID getId();
    public abstract void setId(ID id);
}
