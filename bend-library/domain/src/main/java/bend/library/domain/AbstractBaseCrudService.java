package bend.library.domain;

import bend.library.data.crud.BaseCrudData;
import bend.library.data.crud.BaseCrudeViewData;
import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.response.impl.PageableDataResponse;
import bend.library.domain.entity.BaseEntity;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

@RequiredArgsConstructor
public abstract class AbstractBaseCrudService<CrudData extends BaseCrudData, Domain extends BaseEntity<BigInteger>> extends AbstractBaseService implements BaseCrudService<CrudData, Domain> {
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

    @Override
    public CrudData findOne(BigInteger id) {
        return null;
    }

    @Override
    public Page<BaseCrudeViewData> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public PageableDataResponse<BaseFlexibleCrudeViewData> findAllFlexible(Pageable pageable) {
        return makeFlexible(flexiblePageData(pageable));
    }

    protected abstract Page<Object[]> flexiblePageData(Pageable pageable);
}
