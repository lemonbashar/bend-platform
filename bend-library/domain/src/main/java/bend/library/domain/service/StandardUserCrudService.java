package bend.library.domain.service;

import bend.framework.base.util.BendOptional;
import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.crud.flexible.FlexibleIndex;
import bend.library.data.crud.flexible.FlexibleRule;
import bend.library.data.response.BendStatus;
import bend.library.data.response.impl.PageableDataResponse;
import bend.library.domain.repositories.UserRepository;
import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class StandardUserCrudService extends UserCrudService {
    // FETCHED_COLUMNS = {"USERNAME", "EMAIL", "ACTIVE_STATUS", "CREATE_BY", "UPDATE_BY"};
    private static final String[] FLEXIBLE_COLUMNS = {"USERNAME", "EMAIL", "ACTIVE STATUS", "CHANGED BY"};
    private static final FlexibleIndex[] FLEXIBLE_INDICES ={
      FlexibleIndex.of(0),
      FlexibleIndex.of(1),
      FlexibleIndex.ofDynamic(2, FlexibleRule.bool(2, "Active", "Inactive")),
      FlexibleIndex.ofDynamic(3, FlexibleRule.or(3,4))
    };
    @Autowired
    public StandardUserCrudService(@NonNull UserRepository repository) {
        super(repository);
    }

    @Override
    public PageableDataResponse<BaseFlexibleCrudeViewData> findAllFlexible(Pageable pageable) {
        return BendOptional.of(((UserRepository)repository).findAllFlexible(pageable))
                .map(page->new PageableDataResponse<>(new BaseFlexibleCrudeViewData(FLEXIBLE_COLUMNS, FLEXIBLE_INDICES, page.getContent()), BendStatus.SUCCESS, page.getTotalPages(), page.getTotalElements()))
                .get();
    }
}
