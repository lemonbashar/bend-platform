package bend.library.domain.repositories;

import bend.library.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
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
public interface UserRepository extends JpaRepository<User, BigInteger> {

    Optional<User> findByUsernameAndActive(String username, boolean activeStatus);
}
