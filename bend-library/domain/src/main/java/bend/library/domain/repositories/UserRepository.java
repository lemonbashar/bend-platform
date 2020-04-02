package bend.library.domain.repositories;

import bend.library.domain.data.UserCrudData;
import bend.library.domain.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
public interface UserRepository extends JpaRepository<User, BigInteger> {

    Optional<User> findByUsernameAndActive(String username, boolean activeStatus);

    Optional<User> findByUsername(String username);

    @Query("SELECT new bend.library.domain.data.UserCrudData(model.id, model.username, model.password) FROM User model")
    Page<UserCrudData> findAllPageable(Pageable pageable);

    @Query("SELECT model FROM User model WHERE model.id =:userId")
    Optional<User> findOneById(@Param("userId") BigInteger userId);
}
