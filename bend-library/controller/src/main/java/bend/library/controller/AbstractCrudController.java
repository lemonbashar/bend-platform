package bend.library.controller;

import bend.library.data.crud.BaseCrudData;
import bend.library.data.crud.BaseCrudeViewData;
import bend.library.data.response.IBendResponse;
import bend.library.data.response.IDataResponse;
import bend.library.domain.entity.BaseEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.math.BigInteger;
import java.util.List;

/**
 * To make a dynamic crud ui make a model design for ui to back-end, where all ui try to send data as sub-class of base data
 * and response also.
 */
public abstract class AbstractCrudController<CrudData extends BaseCrudData, Domain extends BaseEntity<BigInteger>> {

    public abstract ResponseEntity<? extends IBendResponse> save(Domain domain);
    public abstract ResponseEntity<? extends IBendResponse> update(Domain domain);
    public abstract ResponseEntity<? extends IDataResponse<CrudData>> findOne(BigInteger id);
    public abstract ResponseEntity<? extends IDataResponse<List<BaseCrudeViewData>>> findAll(Pageable pageable);
    public abstract ResponseEntity<? extends IBendResponse> delete(BigInteger id);
}
