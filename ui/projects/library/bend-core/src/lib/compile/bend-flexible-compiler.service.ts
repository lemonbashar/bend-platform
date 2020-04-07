import {
  FlexibleDataTypes,
  FlexibleIndex,
  FlexibleRuleNameTexts
} from '../model/crud/base-flexible-crud.data';
import {Injectable} from '@angular/core';

export abstract class AbstractBendFlexibleCompilerService {
  AND_SEPARATOR = ' - ';

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
    return 'N/A';
  }

  private valueByDataType(objValue: any, dataType: string): string {
    if (objValue == null) {
      return 'N/A';
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
    for (const indexValue of index.flexibleRule.fromIndices) {
      if (values[indexValue] != null) {
        return values[indexValue] ; /*this.valueByDataType(values[indexValue], index.flexibleRule.indicesDataTypes[indexValue]);*/
      }
    }
    return '';
  }

  protected returnFromBool(index: FlexibleIndex, values: any[]): any {
    const indexTop = index.flexibleRule.fromIndices[0];
    if (String(values[indexTop]).toUpperCase() === 'TRUE') {
      return index.flexibleRule.referenceValues[0];
    } else {
      return index.flexibleRule.referenceValues[1];
    }
  }
}

@Injectable({ providedIn: 'root' })
export class BendFlexibleCompilerService extends AbstractBendFlexibleCompilerService {

}
