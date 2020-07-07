import { DomainDescription } from './domain-description.model';
import { BaseData } from '../base-data';
export declare class FieldDescription extends BaseData {
    fieldName?: string;
    fieldTitle?: string;
    dataType?: string;
    domainDescription?: DomainDescription;
    hasPermissionElExpression?: string;
}
