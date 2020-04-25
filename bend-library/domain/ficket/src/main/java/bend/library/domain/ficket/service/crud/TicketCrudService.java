package bend.library.domain.ficket.service.crud;

import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.response.impl.PageableDataResponse;
import bend.library.domain.AbstractBaseCrudService;
import bend.library.domain.ficket.data.TicketCrudData;
import bend.library.domain.ficket.entity.Ticket;
import bend.library.domain.ficket.repositories.TicketRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigInteger;

@Service
public class TicketCrudService extends AbstractBaseCrudService<TicketCrudData, Ticket> {

    @Autowired
    public TicketCrudService(@NonNull TicketRepository repository) {
        super(repository);
    }

    @Override
    public PageableDataResponse<BaseFlexibleCrudeViewData> findAllFlexible(Pageable pageable) {
        return null;
    }

    @Override
    public BaseFlexibleCrudeViewData findOneFlexible(BigInteger id) {
        return null;
    }
}
