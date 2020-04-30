package bend.library.domain.ficket.repositories;

import bend.library.domain.ficket.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Optional;

@Repository
@Transactional
public interface TicketRepository extends JpaRepository<Ticket, BigInteger> {
    Optional<Ticket> findBySeatNumberAndCarIdAndRideConfigIdAndRideDate(String seatNumber, BigInteger carId, BigInteger rideConfigId, LocalDate rideDate);
}
