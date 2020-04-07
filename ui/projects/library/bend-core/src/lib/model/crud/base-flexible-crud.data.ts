export class BaseFlexibleCrudViewData {
  columns: string[];
  values: string[][];
  indexes: FlexibleIndex[];
}

export class FlexibleIndex {
  dynamic: boolean;
  index: number;
  datatype: string;
  dataFormat: string;
  flexibleRule: FlexibleRule;
}

export class FlexibleRule {
  name: string;
  fromIndices: number[];
  indicesDataTypes: string[];
  referenceValues: string[];
  rulePolicy: FlexibbleRulePolicy;
}

export enum FlexibbleRulePolicy {
  CHECKED_BY_NULL,
  CHECKED_BY_BOOLEAN
}

export const FlexibleRulePolicyTexts = {
  CHECKED_BY_NULL: 'CHECKED_BY_NULL',
  CHECKED_BY_BOOLEAN: 'CHECKED_BY_BOOLEAN'
};

export const FlexibleRuleNameTexts = {
  OR: 'OR',
  AND: 'AND',
  BOOL: 'BOOL'
};

export const FlexibleDataTypes = {
  STRING: 'STRING',
  DATE: 'DATE'
};
