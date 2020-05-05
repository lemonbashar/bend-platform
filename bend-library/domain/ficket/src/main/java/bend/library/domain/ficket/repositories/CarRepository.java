package bend.library.domain.ficket.repositories;

import bend.library.domain.ficket.entity.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;

@Repository
@Transactional
public interface CarRepository extends JpaRepository<Car, BigInteger> {

    @SuppressWarnings("SqlResolve")
    @Query(value = "SELECT DFC.NAME, DFC.LICENCE, DFC.NUMBER_PLATE\n" +
            "FROM DB_FICKET_CAR  DFC", nativeQuery = true)
    Page<Object[]> findAllFlexible(Pageable pageable);
}
