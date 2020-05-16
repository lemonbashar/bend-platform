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
@Table(name = "DB_PLACE_DIVISION")
@Entity
public class Division extends BaseEntity<BigInteger> implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "PK_DB_PLACE_DIVISION")
    @SequenceGenerator(name = "PK_DB_PLACE_DIVISION", sequenceName = "DB_PLACE_DIVISION_SEQ", allocationSize = 1)
    private BigInteger id;

    @Nationalized
    @Column(name = "NAME", length = 32)
    private String name;
}
