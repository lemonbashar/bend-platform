package bend.library.data.crud.flexible;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor
public class BaseFlexibleCrudeViewData {
    protected final String[] columns;
    protected final FlexibleIndex[] indexes;
    protected final List<Object[]> values;
}
