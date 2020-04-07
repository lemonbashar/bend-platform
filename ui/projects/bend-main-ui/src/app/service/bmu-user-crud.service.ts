import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService, UserCrudData} from 'bend-core';

@Injectable({ providedIn: 'root' })
export class BmuUserCrudService extends BaseService<UserCrudData, UserCrudData> {
    constructor(
      http: HttpClient
    ) {
      super('/user', http);
    }
}
