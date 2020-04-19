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
import java.util.HashSet;
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

    @Column(name = "TICKET_PRICE", nullable = false)
    private Double ticketPrice;

    @ManyToMany
    @JoinTable(name = "JT_DB_FICKET_CAR_CONFIG_X_DB_FICKET_RIDE_CONFIG", uniqueConstraints = @UniqueConstraint(name = "CAR_CONFIG_ID_RIDE_CONFIG_ID_UNIQUE_KEY", columnNames = {"CAR_CONFIG_ID", "RIDE_CONFIG_ID"}), joinColumns = @JoinColumn(name = "CAR_CONFIG_ID", referencedColumnName = "ID", nullable = false), inverseJoinColumns = @JoinColumn(name = "RIDE_CONFIG_ID", referencedColumnName = "ID", nullable = false))
    private Set<RideConfig> rideConfigs = new HashSet<>();

    @Column(name = "TOTAL_SEAT", nullable = false)
    private Integer totalSeat;

    @ManyToOne
    @JoinColumn(name = "SEAT_CONFIG_ID", nullable = false)
    private SeatConfig seatConfig;
}
