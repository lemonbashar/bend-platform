package bend.library.domain.ficket.service;

import bend.library.domain.entity.User;
import bend.library.domain.ficket.entity.RideConfig;
import bend.library.domain.ficket.entity.Ticket;

import java.math.BigInteger;
import java.time.LocalDate;

public interface TicketService {
    Ticket buyTicket(final BigInteger userId, final String seatNo, final BigInteger rideConfigId, final BigInteger carId, final LocalDate rideDate);
}
