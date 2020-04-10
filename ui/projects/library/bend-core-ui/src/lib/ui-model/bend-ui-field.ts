import {ISqlFetchDefinition} from 'bend-core';

export class BendUiField {
  name: string;
  viewName: string;
  dataType: DataType;
  fetch: ISqlFetchDefinition; /*When the datatype is select then it's need a list of selection data*/
}

export enum DataType {
  TEXT,
  LONG_TEXT,
  SELECT
}
