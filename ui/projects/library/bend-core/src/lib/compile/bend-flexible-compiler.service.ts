import {
  FlexibleDataTypes,
  FlexibleIndex,
  FlexibleRuleNameTexts, FlexibleRulePolicyTexts
} from '../model/crud/base-flexible-crud.data';
import {Injectable} from '@angular/core';

export abstract class AbstractBendFlexibleCompilerService {
  AND_SEPARATOR = ' - ';
  private GLOBAL_DEFAULT_VALUE = 'N/A';

  compile(index: FlexibleIndex, values: any[]): any {
    if (!index.dynamic) {
      return values[index.index];
    } else {
      if (index.flexibleRule.name === FlexibleRuleNameTexts.AND) {
        return this.returnFromAnd(index, values);
      } else if (index.flexibleRule.name === FlexibleRuleNameTexts.OR) {
        return this.returnFromOr(index, values);
      } else if (index.flexibleRule.name === FlexibleRuleNameTexts.BOOL) {
        return this.returnFromBool(index, values);
      }
    }
    return this.GLOBAL_DEFAULT_VALUE;
  }

  private valueByDataType(objValue: any, dataType: string): string {
    if (objValue == null) {
      return this.GLOBAL_DEFAULT_VALUE;
    }
    switch (dataType) {
      case FlexibleDataTypes.STRING:
        return objValue.toString();
    }
  }

  protected returnFromAnd(index: FlexibleIndex, values: any[]): any {
    let output = '';
    for (const indexValue of index.flexibleRule.fromIndices) {
      output += this.AND_SEPARATOR + this.valueByDataType(values[indexValue], index.flexibleRule.indicesDataTypes[indexValue]);
    }
    return output;
  }

  protected returnFromOr(index: FlexibleIndex, values: any[]) {
    switch (index.flexibleRule.rulePolicy.toString()) {
      case FlexibleRulePolicyTexts.CHECKED_BY_NULL:
        return this.basedOnNull(index, values);
    }
    return this.GLOBAL_DEFAULT_VALUE;
  }

  protected returnFromBool(index: FlexibleIndex, values: any[]): any {
    const indexTop = index.flexibleRule.fromIndices[0];
    if (String(values[indexTop]).toUpperCase() === 'TRUE') {
      return this.valueByDataType(index.flexibleRule.referenceValues[0], this.getByIndex(index.flexibleRule.indicesDataTypes, 0));
    } else {
      return this.valueByDataType(index.flexibleRule.referenceValues[1], this.getByIndex(index.flexibleRule.indicesDataTypes, 1));
    }
  }

  private getByIndex(indicesDataTypes: string[], index: number): string {
    if (indicesDataTypes == null || indicesDataTypes.length <= index) {
      return FlexibleDataTypes.STRING;
    }
    return indicesDataTypes[index];
  }

  private basedOnNull(index: FlexibleIndex, values: any[]): any {
    for (const indexValue of index.flexibleRule.fromIndices) {
      if (values[indexValue] != null) {
        return this.valueByDataType(values[indexValue], this.getByIndex(index.flexibleRule.indicesDataTypes, indexValue));
      }
    }
    return this.GLOBAL_DEFAULT_VALUE;
  }
}

@Injectable({ providedIn: 'root' })
export class BendFlexibleCompilerService extends AbstractBendFlexibleCompilerService {

}
