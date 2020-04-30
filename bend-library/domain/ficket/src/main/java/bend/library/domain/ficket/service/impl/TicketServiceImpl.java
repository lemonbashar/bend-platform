package bend.library.domain.ficket.service.impl;

import bend.library.domain.entity.User;
import bend.library.domain.ficket.entity.Car;
import bend.library.domain.ficket.entity.RideConfig;
import bend.library.domain.ficket.entity.Ticket;
import bend.library.domain.ficket.repositories.CarRepository;
import bend.library.domain.ficket.repositories.TicketRepository;
import bend.library.domain.ficket.service.TicketService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.time.LocalDate;

@RequiredArgsConstructor
@Service
public class TicketServiceImpl implements TicketService {
    private final @NonNull TicketRepository ticketRepository;
    private final @NonNull CarRepository carRepository;


    @Override
    public Ticket buyTicket(final BigInteger userId, final String seatNo, final BigInteger rideConfigId, final BigInteger carId, final LocalDate rideDate) {
        Ticket ticket = this.ticketRepository.findBySeatNumberAndCarIdAndRideConfigIdAndRideDate(seatNo, carId, rideConfigId,rideDate).orElse(null);
        final Car car = this.carRepository.findById(carId).orElseThrow();
        final
        if (ticket == null) {
            ticket = new Ticket();
            ticket.setBuyer(new User(userId));
            ticket.set
        }
        return null;
    }
}
