package bend.library.domain.ficket.repositories;

import bend.library.domain.ficket.entity.RideConfig;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;

@Repository
@Transactional
public interface RideConfigRepository extends JpaRepository<RideConfig, BigInteger> {
}
