import {AuthorityData} from './authority.data';
import {BaseCrudData} from './crud/base-crud.data';

export class UserCrudData extends BaseCrudData {
  public username?: string;
  public email?: string;
  public password?: string;
  public authorities?: AuthorityData[];
}
