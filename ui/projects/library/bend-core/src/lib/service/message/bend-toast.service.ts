import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BendToastService {
  constructor(
  ) {
  }

  make(message: string, timeout?: number): BendToastService {
    console.log(message);
    return this;
  }

  makeError(message: string, timeout?: number, error?: HttpErrorResponse): BendToastService {
    console.error(message);
    return this;
  }
}
