import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../model/ticket.model';
import {BridgeBaseFicketService} from '../bridge/bridge.base-ficket.service';

@Injectable({ providedIn: 'root' })
export class BfuCarService extends BridgeBaseFicketService<Car, Car> {
  constructor(
    http: HttpClient
  ) {
    super('/car', http);
  }

}
