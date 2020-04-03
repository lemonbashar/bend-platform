import {AuthorityCrudData} from './authority-crud.data';
import {BaseCrudData} from './crud/base-crud.data';

export class UserCrudData extends BaseCrudData {
  constructor(
    public username?: string,
    public email?: string,
    public password?: string,
    public authorities?: AuthorityCrudData[]
  ) {
    super();
  }
}
