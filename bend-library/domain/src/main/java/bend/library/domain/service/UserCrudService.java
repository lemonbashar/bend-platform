package bend.library.domain.service;

import bend.framework.base.util.BendOptional;
import bend.library.constant.BaseConstants;
import bend.library.data.crud.BaseCrudData;
import bend.library.data.crud.BaseCrudeViewData;
import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.crud.flexible.FlexibleIndex;
import bend.library.data.crud.flexible.FlexibleRule;
import bend.library.data.response.BendStatus;
import bend.library.data.response.impl.PageableDataResponse;
import bend.library.domain.AbstractBaseCrudService;
import bend.library.domain.data.UserCrudData;
import bend.library.domain.entity.User;
import bend.library.domain.repositories.UserRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.math.BigInteger;

@Service
public class UserCrudService extends AbstractBaseCrudService<UserCrudData, User> {
    // FETCHED_COLUMNS = {"USERNAME", "EMAIL", "ACTIVE_STATUS", "CREATE_BY", "UPDATE_BY", "ID"};
    private static final String[] FLEXIBLE_COLUMNS = {"USERNAME", "EMAIL", "ACTIVE STATUS", "CHANGED BY"};
    private static final int idIndex = 5;
    private static final FlexibleIndex[] FLEXIBLE_INDICES ={
            FlexibleIndex.of(0),
            FlexibleIndex.of(1),
            FlexibleIndex.ofDynamic(2, FlexibleRule.bool(2, "Active", "Inactive")),
            FlexibleIndex.ofDynamic(3, FlexibleRule.or(3,4))
    };

    @Autowired
    public UserCrudService(@NonNull UserRepository repository) {
        super(repository);
    }

    @Override
    public BaseCrudData save(User user) {
        throw new SecurityException("Intentionally Not Implemented, force to bypass the request to UserService Due to Security Reason.");
    }

    @Override
    public BaseCrudData update(User user) {
        throw new SecurityException("Intentionally Not Implemented, force to bypass the request to UserService Due to Security Reason");
    }

    @Override
    public UserCrudData findOne(BigInteger id) {
        return ((UserRepository)this.repository).findOneById(id).map(User::toData).orElse(null);
    }

    @Override
    public Page<BaseCrudeViewData> findAll(Pageable pageable) {
        return ((UserRepository)this.repository).findAllPageable(pageable);
    }

    @Override
    public PageableDataResponse<BaseFlexibleCrudeViewData> findAllFlexible(Pageable pageable) {
        return BendOptional.of(((UserRepository)repository).findAllFlexible(pageable))
                .map(page->new PageableDataResponse<>(new BaseFlexibleCrudeViewData(FLEXIBLE_COLUMNS, FLEXIBLE_INDICES, page.getContent(), idIndex), BendStatus.SUCCESS, page.getTotalPages(), page.getTotalElements()))
                .get();
    }

    @Override
    public BaseFlexibleCrudeViewData findOneFlexible(final BigInteger id) {
        return null;
    }

    @Override
    public boolean delete(BigInteger id) {
        // return super.delete(id);
        throw new SecurityException("Intentionally Not Implemented, force to inactive the user instead of delete.");
    }

    public UserCrudData findByUsername(String username) {
        return ((UserRepository)this.repository).findByUsername(username).map(User::toData).orElse(null);
    }
}
