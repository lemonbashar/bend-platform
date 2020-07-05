package bend.library.domain.repositories;

import bend.library.domain.entity.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;
import java.util.Optional;

/**
 * @author lemon
 * Email lemon.bashar@gmail.com
 * Created 2/6/2020
 */
@Repository
@Transactional
public interface AuthorityRepository extends JpaRepository<Authority, BigInteger> {
    @Query("SELECT new bend.library.domain.entity.Authority(auth.id, auth.name) FROM Authority auth WHERE auth.name =:authorityName AND auth.active=:activeStatus")
    Optional<Authority> findAuthorityByNameAndActive(@Param("authorityName") String authorityName, @Param("activeStatus") boolean activeStatus);

    @Query("SELECT new bend.library.domain.entity.Authority(auth.id, auth.name) FROM Authority auth WHERE auth.name =:authorityName")
    Optional<Authority> findAuthorityByName(@Param("authorityName") String authorityName);
}
