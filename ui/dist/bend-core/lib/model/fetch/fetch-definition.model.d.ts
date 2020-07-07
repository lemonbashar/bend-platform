export declare enum IJoinType {
    INNER_JOIN = 0,
    LEFT_JOIN = 1,
    RIGHT_JOIN = 2,
    LEFT_OUTER_JOIN = 3,
    RIGHT_OUTER_JOIN = 4,
    FULL_JOIN = 5
}
export interface ISqlJoin {
    joinType: IJoinType;
    dependentAlias: string;
    relationName: string;
    alias: string;
}
export declare class SqlJoin implements ISqlJoin {
    joinType: IJoinType;
    dependentAlias: string;
    relationName: string;
    alias: string;
    constructor(joinType: IJoinType, dependentAlias: string, relationName: string, alias: string);
}
export interface IParameter {
    name: string;
    value: string;
}
export declare class Parameter implements IParameter {
    name: string;
    value: string;
    constructor(name: string, value: string);
}
export interface IFetchDefinition {
    key: string;
    domain: string;
}
export interface ISqlFetchDefinition extends IFetchDefinition {
    columns: string[];
    condition: string;
    joins: ISqlJoin[];
    orderBy: string;
    alias: string;
    parameters: IParameter[];
}
export declare class FetchDefinition implements IFetchDefinition {
    key: string;
    domain: string;
    constructor();
}
export declare class SqlFetchDefinition extends FetchDefinition implements ISqlFetchDefinition {
    columns: string[];
    condition: string;
    joins: ISqlJoin[];
    orderBy: string;
    alias: string;
    parameters: IParameter[];
    constructor();
}
