package bend.library.domain.service;

import bend.library.data.crud.BaseCrudData;
import bend.library.data.crud.BaseCrudeViewData;
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
    public boolean delete(BigInteger id) {
        // return super.delete(id);
        throw new SecurityException("Intentionally Not Implemented, force to inactive the user instead of delete.");
    }
}
