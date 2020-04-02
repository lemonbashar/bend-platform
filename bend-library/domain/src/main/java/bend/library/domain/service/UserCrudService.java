package bend.library.domain.service;

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
    public UserCrudData findOne(BigInteger id) {
        return ((UserRepository)this.repository).findOneById(id).map(User::toData).orElse(null);
    }

    @Override
    public Page<UserCrudData> findAll(Pageable pageable) {
        return ((UserRepository)this.repository).findAllPageable(pageable);
    }
}
