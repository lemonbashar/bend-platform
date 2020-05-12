package bend.library.domain.ficket.repositories;

import bend.library.domain.ficket.entity.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;
import java.util.Optional;

@Repository
@Transactional
public interface CarRepository extends JpaRepository<Car, BigInteger> {

    @SuppressWarnings("SqlResolve")
    @Query(value = "SELECT DFC.NAME, DFC.LICENCE, DFC.NUMBER_PLATE, DFC.ID\n" +
            "FROM DB_FICKET_CAR DFC", nativeQuery = true)
    Page<Object[]> findAllFlexible(Pageable pageable);

    @SuppressWarnings("SqlResolve")
    @Query(value = "SELECT DFC.NAME, DFC.ID\n" +
            "FROM DB_FICKET_CAR DFC WHERE DFC.ACTIVE_STATUS=true", nativeQuery = true)
    Page<Object[]> findAllFlexibleOnlyActive(Pageable pageable);

    @Query("SELECT sConf.seatStructure FROM Car model INNER JOIN model.carConfig conf INNER JOIN conf.seatConfig sConf WHERE model.id=:carId")
    Optional<String> findSeatStructure(@Param("carId") BigInteger carId);
}
