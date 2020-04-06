package bend.library.domain;

import bend.library.data.crud.BaseCrudData;
import bend.library.data.crud.BaseCrudeViewData;
import bend.library.data.crud.BaseFlexibleCrudeViewData;
import bend.library.data.response.IDataResponse;
import bend.library.data.response.impl.PageableDataResponse;
import bend.library.domain.entity.BaseEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.math.BigInteger;
import java.util.List;

public interface BaseCrudService< CrudData extends BaseCrudData, Domain extends BaseEntity<BigInteger>> {
    BaseCrudData save(Domain domain);

    BaseCrudData update(Domain domain);

    CrudData findOne(BigInteger id);

    Page<BaseCrudeViewData> findAll(Pageable pageable);

    boolean delete(BigInteger id);

    PageableDataResponse<BaseFlexibleCrudeViewData> findAllFlexible(Pageable pageable);
}
