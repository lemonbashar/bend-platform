package bend.library.domain.repositories;

import bend.library.data.crud.BaseCrudeViewData;
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
import java.util.Collection;
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

    @Query("SELECT new bend.library.data.crud.BaseCrudeViewData(model.id, model.active, model.username, model.email) FROM User model")
    Page<BaseCrudeViewData> findAllPageable(Pageable pageable);

    @Query("SELECT model FROM User model WHERE model.id =:userId")
    Optional<User> findOneById(@Param("userId") BigInteger userId);

    @Query(value = "SELECT DMBU.USERNAME, DMBU.EMAIL, DMBU.ACTIVE_STATUS, CB.USERNAME CREATE_BY, UB.USERNAME UPDATE_BY\n" +
            "FROM DB_MAIN_BEND_USER DMBU\n" +
            "LEFT JOIN DB_MAIN_BEND_USER CB ON DMBU.CREATE_BY = CB.ID\n" +
            "LEFT JOIN DB_MAIN_BEND_USER UB ON DMBU.UPDATE_BY = UB.ID", nativeQuery = true)
    Page<Object> findAllFlexible(Pageable pageable);
}
