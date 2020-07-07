import { ISqlFetchDefinition } from 'bend-core';
export declare class BendUiField {
    name: string;
    viewName: string;
    dataType: DataType;
    fetch: ISqlFetchDefinition;
}
export declare enum DataType {
    TEXT = 0,
    LONG_TEXT = 1,
    SELECT = 2
}
