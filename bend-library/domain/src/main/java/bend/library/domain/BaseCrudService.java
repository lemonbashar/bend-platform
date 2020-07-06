package bend.library.domain;

import bend.library.data.crud.BaseCrudData;
import bend.library.data.crud.BaseCrudeViewData;
import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.response.impl.PageableDataResponse;
import bend.library.domain.entity.BaseEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.math.BigInteger;

public interface BaseCrudService<CrudData extends BaseCrudData, Domain extends BaseEntity<BigInteger>> {
    BaseCrudData save(Domain domain);

    BaseCrudData update(Domain domain);

    CrudData findOne(BigInteger id);

    @Deprecated
    Page<BaseCrudeViewData> findAll(Pageable pageable);

    boolean delete(BigInteger id);

    /**
     * make view flexible according to server responses and it's data-types.
     * like if data not dynamic, then it just print actual data otherwise it print based on flexible rule.
     *
     * @param pageable page
     * @return Flexible crud view data
     */
    PageableDataResponse<BaseFlexibleCrudeViewData> findAllFlexible(final Pageable pageable);

    BaseFlexibleCrudeViewData findOneFlexible(final BigInteger id);

}
