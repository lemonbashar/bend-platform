import {BaseModel, IBaseModel} from './base-model';

export interface IDomainDescription extends IBaseModel {
  domainName?: string;
  packageName?: string;
  hasPermissionElExpression?: string;
  superDomain?: IDomainDescription;
}

export class DomainDescription extends BaseModel implements IDomainDescription {
}
