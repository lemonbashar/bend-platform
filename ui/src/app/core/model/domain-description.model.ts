import {AbstractAudit, IAbstractAudit} from './abstract-audit.model';

export interface IDomainDescription extends IAbstractAudit {
  id?: number;
  domainName?: string;
  packageName?: string;
  hasPermissionElExpression?: string;
  superDomain?: IDomainDescription;
}

export class DomainDescription extends AbstractAudit implements IDomainDescription {
  constructor(
    public id?: number,
    public domainName?: string,
    public packageName?: string,
    public hasPermissionElExpression?: string,
    public superDomain?: IDomainDescription
  ) {
    super();
  }
}
