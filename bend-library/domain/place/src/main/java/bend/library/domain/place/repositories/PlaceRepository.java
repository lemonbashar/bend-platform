package bend.library.domain.place.repositories;

import bend.library.domain.place.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;

@Transactional
@Repository
public interface PlaceRepository extends JpaRepository<Place, BigInteger> {
}
