package bend.library.domain.ficket.entity;

import bend.library.annotation.prepersist.AutoActive;
import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.annotation.prepersist.PrePersist;
import bend.library.domain.entity.BaseEntity;
import bend.library.domain.place.entity.Place;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@NoArgsConstructor
@EqualsAndHashCode(callSuper = true, of = {"id", "headQuarter"})
@Setter
@Getter
@PrePersist
@AutoActive
@AutoUpdate
@AutoCreate
@Table(name = "DB_FICKET_AGENCY_INFO")
@Entity
public class AgencyInfo extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_FICKET_AGENCY_INFO")
    @SequenceGenerator(name = "PK_DB_FICKET_AGENCY_INFO", sequenceName = "DB_FICKET_AGENCY_INFO_SEQ", allocationSize = 1)
    private BigInteger id;

    @ManyToOne
    @JoinColumn(name = "HEAD_QUARTER_ID", nullable = false)
    private Place headQuarter;
}
