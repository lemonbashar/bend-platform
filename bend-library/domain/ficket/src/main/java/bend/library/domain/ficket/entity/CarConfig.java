package bend.library.domain.ficket.entity;

import bend.library.annotation.prepersist.AutoActive;
import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.annotation.prepersist.PrePersist;
import bend.library.domain.entity.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.Set;

@NoArgsConstructor
@Setter
@Getter
@PrePersist
@AutoActive
@AutoUpdate
@AutoCreate
@Table(name = "DB_FICKET_CAR_CONFIG")
@Entity
public class CarConfig  extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_FICKET_CAR_CONFIG")
    @SequenceGenerator(name = "PK_DB_FICKET_CAR_CONFIG", sequenceName = "DB_FICKET_CAR_CONFIG_SEQ", allocationSize = 1)
    private BigInteger id;

    @Column(name = "TICKET_PRICE")
    private Double ticketPrice;

    @ManyToMany
    @JoinTable(name = "JT_DB_FICKET_CAR_CONFIG_X_DB_FICKET_RIDE_CONFIG")
    private Set<RideConfig> rideConfigs;

    @Column(name = "TOTAL_SEAT")
    private Integer totalSeat;
}
