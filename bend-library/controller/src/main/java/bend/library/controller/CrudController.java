package bend.library.controller;

import bend.framework.base.util.BendOptional;
import bend.library.constant.APiConstants;
import bend.library.controller.util.ResponseType;
import bend.library.controller.util.ResponseUtil;
import bend.library.data.crud.BaseCrudData;
import bend.library.data.crud.BaseCrudeViewData;
import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.response.BendStatus;
import bend.library.data.response.IBendResponse;
import bend.library.data.response.IDataResponse;
import bend.library.data.response.impl.BendResponse;
import bend.library.data.response.impl.DataResponse;
import bend.library.data.response.impl.PageableDataResponse;
import bend.library.domain.BaseCrudService;
import bend.library.domain.entity.BaseEntity;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.math.BigInteger;
import java.util.List;
import java.util.Objects;

import static bend.library.constant.APiConstants.CrudControllerApi.ONE_PARAM_ID;

@RequiredArgsConstructor
public class CrudController<CrudData extends BaseCrudData, Domain extends BaseEntity<BigInteger>> extends AbstractCrudController<CrudData, Domain> {
    protected final @NonNull BaseCrudService<CrudData, Domain> baseCrudService;

    @PostMapping
    @Override
    public ResponseEntity<? extends IBendResponse> save(@RequestBody @Valid Domain domain) {
        return BendOptional.ofNullable(this.baseCrudService.save(domain))
                .map(persisted -> new BendResponse(Objects.isNull(persisted) ? BendStatus.FAILURE : BendStatus.SUCCESS))
                .map(ResponseUtil::of).get().response(ResponseType::post);
    }

    @PutMapping
    @Override
    public ResponseEntity<? extends IBendResponse> update(Domain domain) {
        return BendOptional.ofNullable(this.baseCrudService.update(domain))
                .map(persisted -> new BendResponse(Objects.isNull(persisted) ? BendStatus.FAILURE : BendStatus.SUCCESS))
                .map(ResponseUtil::of).get().response(ResponseType::put);
    }

    @GetMapping(ONE_PARAM_ID)
    @Override
    public ResponseEntity<? extends IDataResponse<CrudData>> findOne(@PathVariable BigInteger id) {
        return BendOptional.ofNullable(this.baseCrudService.findOne(id))
                .map(fetched -> new DataResponse<>(Objects.isNull(fetched) ? BendStatus.FAILURE : BendStatus.SUCCESS, fetched))
                .map(ResponseUtil::of).get().response(ResponseType::get);
    }

    @GetMapping
    @Override
    public ResponseEntity<PageableDataResponse<List<BaseCrudeViewData>>> findAll(Pageable pageable) {
        return BendOptional.ofNullable(this.baseCrudService.findAll(pageable))
                .map(fetched -> new PageableDataResponse<>(fetched.getContent(), BendStatus.SUCCESS, fetched.getTotalPages(), fetched.getTotalElements()))
                .map(ResponseUtil::of).get().response(ResponseType::get);
    }

    @GetMapping(APiConstants.CrudControllerApi.FLEXIBLE)
    @Override
    public ResponseEntity<PageableDataResponse<BaseFlexibleCrudeViewData>> findAllFlexible(Pageable pageable) {
        return BendOptional.ofNullable(this.baseCrudService.findAllFlexible(pageable))
                .map(ResponseUtil::of).get().response(ResponseType::get);
    }

    @DeleteMapping(ONE_PARAM_ID)
    @Override
    public ResponseEntity<? extends IBendResponse> delete(@PathVariable BigInteger id) {
        return BendOptional.ofNullable(this.baseCrudService.delete(id))
                .map(isDelete -> new BendResponse(isDelete ? BendStatus.FAILURE : BendStatus.SUCCESS))
                .map(ResponseUtil::of).get().response(ResponseType::get);
    }
}
