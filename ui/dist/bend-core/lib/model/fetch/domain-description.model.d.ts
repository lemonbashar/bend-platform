import { BaseData } from '../base-data';
export declare class DomainDescription extends BaseData {
    domainName?: string;
    packageName?: string;
    hasPermissionElExpression?: string;
    superDomain?: DomainDescription;
}
