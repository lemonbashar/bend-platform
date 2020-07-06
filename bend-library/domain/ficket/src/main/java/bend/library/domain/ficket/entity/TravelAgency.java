package bend.library.domain.ficket.entity;

import bend.library.annotation.prepersist.AutoActive;
import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.annotation.prepersist.PrePersist;
import bend.library.domain.entity.BaseEntity;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@NoArgsConstructor
@EqualsAndHashCode(callSuper = true, of = {"id", "agencyName"})
@Setter
@Getter
@PrePersist
@AutoActive
@AutoUpdate
@AutoCreate
@Table(name = "DB_FICKET_TRAVEL_AGENCY")
@Entity
public class TravelAgency extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_FICKET_TRAVEL_AGENCIES")
    @SequenceGenerator(name = "PK_DB_FICKET_TRAVEL_AGENCIES", sequenceName = "DB_FICKET_TRAVEL_AGENCIES_SEQ", allocationSize = 1)
    private BigInteger id;

    @Nationalized
    @Column(name = "AGENCY_NAME", length = 32, nullable = false)
    private String agencyName;

    @OneToOne
    @JoinColumn(name = "AGENCY_INFO_ID")
    private AgencyInfo agencyInfo;
}
