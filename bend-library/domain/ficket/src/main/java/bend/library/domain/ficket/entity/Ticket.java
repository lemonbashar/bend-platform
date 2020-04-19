package bend.library.domain.ficket.entity;

import bend.library.annotation.prepersist.AutoActive;
import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.annotation.prepersist.PrePersist;
import bend.library.domain.entity.BaseEntity;
import bend.library.domain.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalDate;

@NoArgsConstructor
@Setter
@Getter
@PrePersist
@AutoActive
@AutoUpdate
@AutoCreate
@Table(name = "DB_FICKET_TICKET")
@Entity
public class Ticket extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_FICKET_TICKET")
    @SequenceGenerator(name = "PK_DB_FICKET_TICKET", sequenceName = "DB_FICKET_TICKET_SEQ", allocationSize = 1)
    private BigInteger id;

    @Column(name = "RIDE_DATE", nullable = false)
    private LocalDate rideDate;

    @Column(name = "BUY_PRICE", nullable = false)
    private Double buyPrice;

    @Column(name = "SEAT_NUMBER", nullable = false)
    private String seatNumber;

    @ManyToOne
    @JoinColumn(name = "RIDE_CONFIG_ID")
    private RideConfig rideConfig;

    @ManyToOne
    @JoinColumn(name = "CAR_ID")
    private Car car;

    @ManyToOne
    @JoinColumn(name = "BUYER_ID")
    private User buyer;
}
