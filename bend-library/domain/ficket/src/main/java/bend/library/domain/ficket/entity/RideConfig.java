package bend.library.domain.ficket.entity;

import bend.library.annotation.prepersist.AutoActive;
import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.annotation.prepersist.PrePersist;
import bend.library.domain.entity.BaseEntity;
import bend.library.domain.place.entity.Place;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.time.LocalTime;

@NoArgsConstructor
@Setter
@Getter
@PrePersist
@AutoActive
@AutoUpdate
@AutoCreate
@Table(name = "DB_FICKET_RIDE_CONFIG")
@Entity
public class RideConfig  extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_FICKET_RIDE_CONFIG")
    @SequenceGenerator(name = "PK_DB_FICKET_RIDE_CONFIG", sequenceName = "DB_FICKET_RIDE_CONFIG_SEQ", allocationSize = 1)
    private BigInteger id;

    @Nationalized
    @Column(name = "NAME", length = 64, nullable = false)
    private String name;

    @Nationalized
    @Column(name = "DESCRIPTION", length = 1024, nullable = false)
    private String description;

    @Column(name = "START_TIME", nullable = false)
    private LocalTime startTime;

    @Column(name = "FROM_PLACE_ID", nullable = false)
    private Place fromPlace;

    @Column(name = "REACH_TIME", nullable = false)
    private LocalTime reachTime;

    @Column(name = "TO_PLACE_ID", nullable = false)
    private Place toPlace;

    /**
     * Time factor describe that, the car time to start and reach may be later or sooner than timeFactor
     */
    @Column(name = "TIME_FACTOR", nullable = false)
    private LocalTime timeFactor;
}
