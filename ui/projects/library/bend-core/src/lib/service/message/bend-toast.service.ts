import {Injectable} from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BendToastService {
  constructor(
  ) {
  }

  make(message: string, timeout?: number) {
    console.log(message);
    return this;
  }
}
