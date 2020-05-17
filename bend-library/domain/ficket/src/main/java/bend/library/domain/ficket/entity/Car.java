package bend.library.domain.ficket.entity;


import bend.library.annotation.prepersist.AutoActive;
import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.annotation.prepersist.PrePersist;
import bend.library.domain.entity.BaseEntity;
import bend.library.domain.ficket.enumeretion.CarType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@NoArgsConstructor
@Setter
@Getter
@PrePersist
@AutoActive
@AutoUpdate
@AutoCreate
@Table(name = "DB_FICKET_CAR")
@Entity
public class Car  extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_FICKET_CAR")
    @SequenceGenerator(name = "PK_DB_FICKET_CAR", sequenceName = "DB_FICKET_CAR_SEQ", allocationSize = 1)
    private BigInteger id;

    @Nationalized
    @Column(name = "NAME", length = 64, nullable = false)
    private String name;

    @Nationalized
    @Column(name = "LICENCE", length = 32)
    private String licence;

    @Nationalized
    @Column(name = "NUMBER_PLATE", length = 32, nullable = false)
    private String numberPlate;

    @Column(name = "CAR_TYPE", length = 16, nullable = false)
    @Enumerated(EnumType.STRING)
    private CarType carType;

    @ManyToOne
    @JoinColumn(name = "TRAVEL_AGENCY_ID", nullable = false)
    private TravelAgency travelAgency;

    @ManyToOne
    @JoinColumn(name = "CAR_CONFIG_ID", nullable = false)
    private CarConfig carConfig;

    public Car(BigInteger id) {
        this.id =id;
    }
}
