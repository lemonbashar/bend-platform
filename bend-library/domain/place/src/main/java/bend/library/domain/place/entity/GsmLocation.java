package bend.library.domain.place.entity;

import bend.library.annotation.prepersist.AutoActive;
import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.annotation.prepersist.PrePersist;
import bend.library.constant.SpringElConstants;
import bend.library.domain.entity.BaseEntity;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@NoArgsConstructor
@EqualsAndHashCode(callSuper = true, of = {"id", "latitude", "longitude"})
@Setter
@Getter
@PrePersist(isUpdatable = SpringElConstants.FALSE)
@AutoActive
@AutoUpdate
@AutoCreate
@Table(name = "DB_PLACE_GSM_LOCATION")
@Entity
public class GsmLocation extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_PLACE_GSM_LOCATION")
    @SequenceGenerator(name = "PK_DB_PLACE_GSM_LOCATION", sequenceName = "DB_PLACE_GSM_LOCATION_SEQ", allocationSize = 1)
    private BigInteger id;

    /*private String name;

    private String description;*/

    @Column(name = "LATITUDE")
    private Double latitude;

    @Column(name = "LONGITUDE")
    private Double longitude;

    @Column(name = "APTITUDE")
    private Double aptitude;
}
