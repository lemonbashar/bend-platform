package bend.library.domain.ficket.entity;

import bend.library.annotation.prepersist.AutoActive;
import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.annotation.prepersist.PrePersist;
import bend.library.domain.entity.BaseEntity;
import bend.library.domain.ficket.enumeretion.SeatType;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@NoArgsConstructor
@EqualsAndHashCode(callSuper = true, of = {"id", "configName"})
@Setter
@Getter
@PrePersist
@AutoActive
@AutoUpdate
@AutoCreate
@Table(name = "DB_FICKET_SEAT_CONFIG")
@Entity
public class SeatConfig extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_FICKET_SEAT_CONFIG")
    @SequenceGenerator(name = "PK_DB_FICKET_SEAT_CONFIG", sequenceName = "DB_FICKET_SEAT_CONFIG_SEQ", allocationSize = 1)
    private BigInteger id;

    @Nationalized
    @Column(name = "CONFIG_NAME", length = 32, nullable = false)
    private String configName;

    @Enumerated(EnumType.STRING)
    @Column(name = "SEAT_TYPE", length = 16, nullable = false)
    private SeatType seatType;

    @Column(name = "SEAT_STRUCTURE", length = 1024, nullable = false)
    private String seatStructure;
}
