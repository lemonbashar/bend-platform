import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Car} from '../model/ticket.model';
import {BridgeBaseFicketService} from '../bridge/bridge.base-ficket.service';
import {BaseFlexibleCrudViewData, createRequestOption, Page, PageableDataResponse} from 'bend-core';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BfuCarService extends BridgeBaseFicketService<Car, Car> {
  constructor(
    http: HttpClient
  ) {
    super('/car', http);
  }

  carListPublicFlexible(page?: Page): Observable<HttpResponse<PageableDataResponse<BaseFlexibleCrudViewData>>> {
    const options = createRequestOption(page);
    return this.http.get<PageableDataResponse<BaseFlexibleCrudViewData>>(`${this.PUBLIC_URL}/car-list-flexible`, {params: options, observe: 'response'});
  }
}
