package bend.library.domain.cluster.repositories;

import bend.library.domain.cluster.entity.JpaProperties;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;
import java.util.Optional;

@Transactional
@Repository
public interface JpaPropertiesRepository extends JpaRepository<JpaProperties, BigInteger> {
    Optional<JpaProperties> findByPropertyKey(String propertyKey);
}
