package bend.library.domain.place.entity;

import bend.library.annotation.prepersist.AutoActive;
import bend.library.annotation.prepersist.AutoCreate;
import bend.library.annotation.prepersist.AutoUpdate;
import bend.library.annotation.prepersist.PrePersist;
import bend.library.constant.SpringElConstants;
import bend.library.domain.entity.BaseEntity;
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
@PrePersist(isUpdatable = SpringElConstants.FALSE)
@AutoActive
@AutoUpdate
@AutoCreate
@Table(name = "DB_PLACE_PLACE")
@Entity
public class Place extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_PLACE_PLACE")
    @SequenceGenerator(name = "PK_DB_PLACE_PLACE", sequenceName = "DB_PLACE_PLACE_SEQ", allocationSize = 1)
    private BigInteger id;

    @Nationalized
    @Column(name = "NAME", length = 32)
    private String name;

    @JoinColumn(name = "THANA_ID")
    @ManyToOne
    private Thana thana;

    @ManyToOne
    @JoinColumn(name = "GSM_LOCATION_ID")
    private GsmLocation location;
}
