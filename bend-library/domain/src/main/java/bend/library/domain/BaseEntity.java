package bend.library.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import java.math.BigInteger;
import java.time.LocalDate;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 1/29/2020
 */
@Setter
@Getter
@MappedSuperclass
public abstract class BaseEntity {

    @ManyToOne
    @JoinColumn(name = "create_by")
    private User createBy;

    @ManyToOne
    @JoinColumn(name = "update_by")
    private User updateBy;

    @Column(name = "create_date")
    private LocalDate createDate;

    @Column(name = "update_date")
    private LocalDate updateDate;

    @Column(name = "active_status")
    private boolean active;

    public abstract BigInteger getId();
    public abstract void setId(BigInteger id);
}
