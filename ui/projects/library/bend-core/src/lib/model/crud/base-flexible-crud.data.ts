export class BaseFlexibleCrudViewData {
  columns: string[];
  values: string[][];
  indexes: FlexibleIndex[];
  idIndex: number;
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
  rulePolicy: FlexibleRulePolicy;
}

export enum FlexibleRulePolicy {
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
