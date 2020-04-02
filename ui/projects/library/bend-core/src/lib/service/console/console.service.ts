import {Injectable} from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ConsoleService {
  constructor(
    private location: Location,
    private route: Router
  ) {
  }

  message(message: string): ConsoleService {
    console.log(message);
    return this;
  }

  log(message: string, body: HttpResponse<any>): ConsoleService {
    console.log(message);
    return this;
  }

  error(errMessage: string, error: HttpErrorResponse): ConsoleService {
    console.error(errMessage);
    console.error('Detailed Message:' + error.error.message);
    return this;
  }

  backStack() {
    this.location.back();
  }

  goTo(url: string[]) {
    this.route.navigate(url);
  }
}
