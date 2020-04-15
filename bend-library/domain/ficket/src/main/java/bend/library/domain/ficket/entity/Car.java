package bend.library.domain.ficket.entity;


import bend.library.annotation.prepersist.AutoActive;
import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.annotation.prepersist.PrePersist;
import bend.library.constant.SpringElConstants;
import bend.library.domain.entity.BaseEntity;
import bend.library.domain.ficket.enumeretion.CarType;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@NoArgsConstructor
@Setter
@Getter
@PrePersist(isUpdatable = SpringElConstants.User.WHEN_USER_IS_NOT_SYSTEM)
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

    @Column(name = "NAME", length = 64)
    private String name;

    @Column(name = "LICENCE", length = 32)
    private String licence;

    @Column(name = "NUMBER_PLATE", length = 32)
    private String numberPlate;

    @Column(name = "CAR_TYPE", length = 32)
    @Enumerated(EnumType.STRING)
    private CarType carType;
    @ManyToOne
    @JoinColumn(name = "TRAVEL_AGENCIES_ID")
    private TravelAgencies travelAgencies;

    @ManyToOne
    @JoinColumn(name = "CAR_CONFIG_ID")
    private CarConfig carConfig;
}
