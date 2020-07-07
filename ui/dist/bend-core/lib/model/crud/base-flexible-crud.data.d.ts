export declare class BaseFlexibleCrudViewData {
    columns: string[];
    values: string[][];
    indexes: FlexibleIndex[];
    idIndex: number;
}
export declare class FlexibleIndex {
    dynamic: boolean;
    index: number;
    datatype: string;
    dataFormat: string;
    flexibleRule: FlexibleRule;
}
export declare class FlexibleRule {
    name: string;
    fromIndices: number[];
    indicesDataTypes: string[];
    referenceValues: string[];
    rulePolicy: FlexibleRulePolicy;
}
export declare enum FlexibleRulePolicy {
    CHECKED_BY_NULL = 0,
    CHECKED_BY_BOOLEAN = 1
}
export declare const FlexibleRulePolicyTexts: {
    CHECKED_BY_NULL: string;
    CHECKED_BY_BOOLEAN: string;
};
export declare const FlexibleRuleNameTexts: {
    OR: string;
    AND: string;
    BOOL: string;
};
export declare const FlexibleDataTypes: {
    STRING: string;
    DATE: string;
};
