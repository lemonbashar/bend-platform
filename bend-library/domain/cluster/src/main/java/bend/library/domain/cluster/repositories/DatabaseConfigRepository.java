package bend.library.domain.cluster.repositories;

import bend.library.domain.cluster.entity.DatabaseConfig;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

@Transactional
@Repository
public interface DatabaseConfigRepository extends JpaRepository<DatabaseConfig, BigInteger> {
    Optional<DatabaseConfig> findBySchema(String schemaName);

    List<DatabaseConfig> findAllByActiveIsTrue();

    @Query("SELECT databaseConfig FROM DatabaseConfig databaseConfig WHERE databaseConfig.identifiedKey IN :keys AND databaseConfig.active=true")
    List<DatabaseConfig> findAllByKeysAndActiveIsTrue(@Param("keys") String[] keys);
}
