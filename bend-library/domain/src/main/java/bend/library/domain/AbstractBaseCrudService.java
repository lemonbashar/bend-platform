package bend.library.domain;

import bend.library.data.crud.BaseCrudData;
import bend.library.domain.entity.BaseEntity;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

@SuppressWarnings("unchecked")
@RequiredArgsConstructor
public abstract class AbstractBaseCrudService<CrudData extends BaseCrudData, Domain extends BaseEntity<BigInteger>> implements BaseCrudService<CrudData, Domain> {
    protected final @NonNull JpaRepository<Domain, BigInteger> repository;

    @Override
    public BaseCrudData save(Domain domain) {
        return this.repository.save(domain).toData();
    }

    @Override
    public BaseCrudData update(Domain domain) {
        return this.repository.save(domain).toData();
    }

    @Override
    public boolean delete(BigInteger id) {
        try {
            repository.deleteById(id);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}
