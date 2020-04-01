import {IDomainDescription} from './domain-description.model';
import {BaseModel, IBaseModel} from './base-model';

export interface IFieldDescription extends IBaseModel {
  fieldName?: string;
  fieldTitle?: string;
  dataType?: string;
  domainDescription?: IDomainDescription;
  hasPermissionElExpression?: string;
}

export class FieldDescription extends BaseModel implements IFieldDescription {
}
