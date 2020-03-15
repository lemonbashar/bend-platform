import {AbstractAudit, IAbstractAudit} from './abstract-audit.model';
import {IDomainDescription} from './domain-description.model';

export interface IFieldDescription extends IAbstractAudit {
  id?: number;
  fieldName?: string;
  fieldTitle?: string;
  dataType?: string;
  domainDescription?: IDomainDescription;
  hasPermissionElExpression?: string;
}

export class FieldDescription extends AbstractAudit implements IFieldDescription {
  constructor(
    public id?: number,
    public fieldName?: string,
    public fieldTitle?: string,
    public dataType?: string,
    public domainDescription?: IDomainDescription,
    public hasPermissionElExpression?: string
  ) {
    super();
  }
}
