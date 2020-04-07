package bend.library.data.crud.flexible;

import bend.library.data.DataConstants;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
@AllArgsConstructor
public class FlexibleIndex {
    private boolean dynamic = false;
    private final int index;
    private final String datatype;
    /**
     * Use while date-time data format.
     */
    private final String dataFormat;
    private final FlexibleRule flexibleRule;

    public FlexibleIndex(int index) {
        this(index, DataConstants.DataType.STRING, null, null);
    }

    public FlexibleIndex(int index, String datatype, String dataFormat) {
        this(index, datatype, dataFormat, null);
    }

    public static FlexibleIndex of(int index) {
        return new FlexibleIndex(index);
    }

    public static FlexibleIndex ofDynamic(int index, FlexibleRule flexibleRule) {
        return new FlexibleIndex(true, index, DataConstants.DataType.STRING, null, flexibleRule);
    }

    public static FlexibleIndex[] ofTotal(int length) {
        FlexibleIndex[] flexibleIndices = new FlexibleIndex[length];
        for(int i=0; i<length; i++)
            flexibleIndices[i] = FlexibleIndex.of(i);
        return flexibleIndices;
    }
}
