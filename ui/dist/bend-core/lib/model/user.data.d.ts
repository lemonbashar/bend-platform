import { AuthorityCrudData } from './authority-crud.data';
import { BaseCrudData } from './crud/base-crud.data';
export declare class UserCrudData extends BaseCrudData {
    username?: string;
    email?: string;
    password?: string;
    authorities?: AuthorityCrudData[];
    constructor(username?: string, email?: string, password?: string, authorities?: AuthorityCrudData[]);
}
