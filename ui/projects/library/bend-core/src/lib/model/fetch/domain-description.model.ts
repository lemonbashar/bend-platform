import {BaseData} from '../base-data';


export class DomainDescription extends BaseData {
  domainName?: string;
  packageName?: string;
  hasPermissionElExpression?: string;
  superDomain?: DomainDescription;
}
