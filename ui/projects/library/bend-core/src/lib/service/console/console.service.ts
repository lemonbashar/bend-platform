import {Injectable} from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

export enum LogLevel {
  CONSOLE,
  TOAST,
  MESSAGE
}

@Injectable({ providedIn: 'root' })
export class ConsoleService {
  constructor(
    private location: Location,
    private route: Router
  ) {
  }

  message(message: string, logLevel: LogLevel = LogLevel.CONSOLE): ConsoleService {
    switch (logLevel) {
      case LogLevel.CONSOLE:
        console.log(message);
        return this;
      default:
        console.log(message);
    }
    return this;
  }

  successBodyPrint(body: any): ConsoleService {
    console.log(body);
    return this;
  }

  log(message: string, body: HttpResponse<any>): ConsoleService {
    console.log(message);
    return this;
  }

  error(errMessage: string, error?: HttpErrorResponse): ConsoleService {
    console.error(errMessage);
    if (error) {
      console.error('Error Occurred:' + error.error.message);
    }
    return this;
  }

  backStack() {
    this.location.back();
  }

  goTo(url: string[]) {
    this.route.navigate(url);
  }
}
