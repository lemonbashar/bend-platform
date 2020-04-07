package bend.library.data.crud.flexible;

import bend.library.data.DataConstants;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class FlexibleRule {
    private final String name;
    private final int[] fromIndices;
    private final String[] indicesDataTypes;
    private String[] referenceValues;
    private RulePolicy rulePolicy = RulePolicy.CHECKED_BY_NULL;

    public static FlexibleRule or(int ...fromIndex) {
        return new FlexibleRule(DataConstants.FlexibleRuleConstants.OR, fromIndex, new String[]{DataConstants.DataType.STRING, DataConstants.DataType.STRING});
    }

    /**
     * It will Append values by from indices and added extra space and hyphen incrementally
     * @param fromIndex From Indices
     * @return Flexible And rule
     */
    public static FlexibleRule and(int ...fromIndex) {
        return new FlexibleRule(DataConstants.FlexibleRuleConstants.AND, fromIndex, new String[]{DataConstants.DataType.STRING, DataConstants.DataType.STRING});
    }

    /**
     * @param index flexible rules index
     * @param valueWhenTrue apply if the flexible object's {@link bend.library.data.crud.flexible.BaseFlexibleCrudeViewData#values} [index] is true
     * @param valueWhenFalse apply if the flexible object's {@link bend.library.data.crud.flexible.BaseFlexibleCrudeViewData#values} [index] is false
     * @return Flexible Boolean Rule
     */
    public static FlexibleRule bool(int index, String valueWhenTrue, String valueWhenFalse) {
        FlexibleRule flexibleRule = new FlexibleRule(DataConstants.FlexibleRuleConstants.BOOL, new int[]{index}, new String[]{DataConstants.DataType.STRING, DataConstants.DataType.STRING} );
        flexibleRule.referenceValues = new String[]{valueWhenTrue, valueWhenFalse};
        return flexibleRule;
    }
}
