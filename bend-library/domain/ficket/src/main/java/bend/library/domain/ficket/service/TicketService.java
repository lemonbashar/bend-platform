package bend.library.domain.ficket.service;

import bend.library.domain.IBaseService;
import bend.library.domain.ficket.entity.Ticket;

import java.math.BigInteger;
import java.time.LocalDate;

public interface TicketService extends IBaseService<Ticket> {
    Ticket buyTicket(final BigInteger userId, final String seatNo, final BigInteger rideConfigId, final BigInteger carId, final LocalDate rideDate);
}
