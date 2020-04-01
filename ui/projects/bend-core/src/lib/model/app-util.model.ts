export interface IFieldDefinition {
  id?: number | string;
  domainName?: string;
  fieldName?: string;
  value?: string;
}

export class FieldDefinition implements IFieldDefinition {
  constructor(
    public id?: number | string,
    public domainName?: string,
    public fieldName?: string,
    public value?: string
  ) {}
}

