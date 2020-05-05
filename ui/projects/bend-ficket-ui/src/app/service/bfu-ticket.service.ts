import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ticket} from '../model/ticket.model';
import {BridgeBaseFicketService} from '../bridge/bridge.base-ficket.service';

@Injectable({ providedIn: 'root' })
export class BfuTicketService extends BridgeBaseFicketService<Ticket, Ticket> {
  constructor(
    http: HttpClient
  ) {
    super('/ticket', http);
  }
}
