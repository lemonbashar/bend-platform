import {DomainDescription} from './domain-description.model';
import {BaseData} from '../base-data';


export class FieldDescription extends BaseData {
  fieldName?: string;
  fieldTitle?: string;
  dataType?: string;
  domainDescription?: DomainDescription;
  hasPermissionElExpression?: string;
}
