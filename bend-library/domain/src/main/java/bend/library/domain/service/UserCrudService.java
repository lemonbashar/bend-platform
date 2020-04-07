package bend.library.domain.service;

import bend.library.constant.BaseConstants;
import bend.library.data.crud.BaseCrudData;
import bend.library.data.crud.BaseCrudeViewData;
import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.crud.flexible.FlexibleIndex;
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

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

//@Service
public class UserCrudService extends AbstractBaseCrudService<UserCrudData, User> {
    @PersistenceContext(unitName = BaseConstants.ROUTING_JPA_UNIT)
    private EntityManager entityManager;

    @Autowired
    public UserCrudService(@NonNull UserRepository repository) {
        super(repository);
    }

    @Override
    public BaseCrudData save(User user) {
        throw new SecurityException("Intentionally Not Implemented, force to bypass the request to UserService.");
    }

    @Override
    public BaseCrudData update(User user) {
        throw new SecurityException("Intentionally Not Implemented, force to bypass the request to UserService.");
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
        String[] columns = {"username", "email", "active", "lastChangedBy"};
        Page<User> page = this.repository.findAll(pageable);
        List<Object[]> crudeViewData = page.getContent().stream().map(user -> {
            List<Object> objects = new ArrayList<>();
            objects.add(user.getId().toString());
            objects.add(user.getUsername());
            objects.add(user.getEmail());
            objects.add(user.isActive()? "Active": "Inactive");
            objects.add(user.getUpdateBy() != null? user.getUpdateBy().getUsername(): user.getCreateBy().getUsername());
            return objects.toArray(new Object[0]);
        }).collect(Collectors.toList());

        return new PageableDataResponse<>(new BaseFlexibleCrudeViewData(columns, FlexibleIndex.ofTotal(columns.length),crudeViewData), BendStatus.SUCCESS, page.getTotalPages(), page.getTotalElements());
    }

    @Override
    public boolean delete(BigInteger id) {
        // return super.delete(id);
        throw new SecurityException("Intentionally Not Implemented, force to inactive the user instead of delete.");
    }
}
