package bend.library.domain;

import bend.framework.base.util.BendOptional;
import bend.library.data.crud.flexible.BaseFlexibleCrudeViewData;
import bend.library.data.crud.flexible.FlexibleIndex;
import bend.library.data.response.BendStatus;
import bend.library.data.response.impl.PageableDataResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;

@RequiredArgsConstructor
public abstract class AbstractBaseService {

    public PageableDataResponse<BaseFlexibleCrudeViewData> makeFlexible(Page<Object[]> pageData) {
        return BendOptional.of(pageData)
                .map(page->new PageableDataResponse<>(new BaseFlexibleCrudeViewData(flexibleColumns(), flexibleIndices(), page.getContent(), idIndexOfFlexibility()), BendStatus.SUCCESS, page.getTotalPages(), page.getTotalElements()))
                .get();
    }

    protected abstract String[] flexibleColumns();
    protected abstract int idIndexOfFlexibility();
    protected abstract FlexibleIndex[] flexibleIndices();
}
