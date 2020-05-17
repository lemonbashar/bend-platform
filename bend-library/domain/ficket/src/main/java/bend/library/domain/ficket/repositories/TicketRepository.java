package bend.library.domain.ficket.repositories;

import bend.library.domain.ficket.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Optional;

@Repository
@Transactional
public interface TicketRepository extends JpaRepository<Ticket, BigInteger> {

    @Query("SELECT new bend.library.domain.ficket.entity.Ticket(ticket.id, ticket.rideDate, ticket.buyPrice, ticket.seatNumber, rideConfig.id, car.id, ticket.buyer.id) FROM Ticket ticket INNER JOIN ticket.car car INNER JOIN ticket.rideConfig rideConfig WHERE ticket.seatNumber=:seatNumber AND car.id=:carId AND rideConfig.id=:rideConfigId AND ticket.rideDate=:rideDate AND ticket.active=true")
    Optional<Ticket> findBySeatNumberAndCarIdAndRideConfigIdAndRideDate(@Param("seatNumber") String seatNumber, @Param("carId") BigInteger carId, @Param("rideConfigId") BigInteger rideConfigId, @Param("rideDate") LocalDate rideDate);
}
