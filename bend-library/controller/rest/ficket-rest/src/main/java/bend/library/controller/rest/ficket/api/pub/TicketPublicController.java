package bend.library.controller.rest.ficket.api.pub;

import bend.library.controller.rest.ficket.FicketRestApiProvider;
import bend.library.domain.ficket.service.TicketService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(FicketRestApiProvider.TicketApi.TICKET_PUBLIC_ROOT_API)
public class TicketPublicController {
    private final @NonNull TicketService ticketService;
}
