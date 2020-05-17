export enum IJoinType {
  INNER_JOIN,
  LEFT_JOIN,
  RIGHT_JOIN,
  LEFT_OUTER_JOIN,
  RIGHT_OUTER_JOIN,
  FULL_JOIN
}

export interface ISqlJoin {
  joinType: IJoinType;
  dependentAlias: string;
  relationName: string;
  alias: string;
}

export class SqlJoin implements ISqlJoin {
  constructor(
    public joinType: IJoinType,
    public dependentAlias: string,
    public relationName: string,
    public alias: string
  ) {}
}

export interface IParameter {
  name: string;
  value: string;
}

export class Parameter implements IParameter {
  constructor(
    public name: string,
    public value: string
  ) {}
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

export class FetchDefinition implements IFetchDefinition {
  public key: string;
  public domain: string;
  constructor(
  ) {}
}

export class SqlFetchDefinition extends FetchDefinition implements ISqlFetchDefinition {
  public columns: string[];
  public condition: string;
  public joins: ISqlJoin[];
  public orderBy: string;
  public alias: string;
  public parameters: IParameter[];
  constructor() { super(); }
}
