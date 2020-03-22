package bend.library.domain.cluster.repositories;

import bend.library.domain.cluster.entity.MigrationConfig;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;

@Transactional
@Repository
public interface MigrationConfigRepository extends JpaRepository<MigrationConfig, BigInteger> {
}
