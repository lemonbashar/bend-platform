package bend.library.domain.service;

import bend.library.data.crud.BaseCrudData;
import bend.library.data.crud.BaseCrudeViewData;
import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.crud.flexible.FlexibleIndex;
import bend.library.data.crud.flexible.FlexibleRule;
import bend.library.domain.AbstractBaseCrudService;
import bend.library.domain.data.UserCrudData;
import bend.library.domain.entity.User;
import bend.library.domain.repositories.UserRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigInteger;

@Service
public class UserCrudService extends AbstractBaseCrudService<UserCrudData, User> {
    // FETCHED_COLUMNS = {"USERNAME", "EMAIL", "ACTIVE_STATUS", "CREATE_BY", "UPDATE_BY", "ID"};

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

    @Override
    protected Page<Object[]> flexiblePageData(Pageable pageable) {
        return ((UserRepository)repository).findAllFlexible(pageable);
    }

    @Override
    protected String[] flexibleColumns() {
        return new String[] {"USERNAME", "EMAIL", "ACTIVE STATUS", "CHANGED BY"};
    }

    @Override
    protected int idIndexOfFlexibility() {
        return 5;
    }

    @Override
    protected FlexibleIndex[] flexibleIndices() {
        return new FlexibleIndex[] {
                FlexibleIndex.of(0),
                FlexibleIndex.of(1),
                FlexibleIndex.ofDynamic(2, FlexibleRule.bool(2, "Active", "Inactive")),
                FlexibleIndex.ofDynamic(3, FlexibleRule.or(3,4))
        };
    }
}
