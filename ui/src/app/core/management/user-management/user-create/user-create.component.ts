import { Component, OnInit } from '@angular/core';
import {AuthorityService} from '../../authority-management/authority.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService, AppUtilService, DialogService, httpStatus, IAuthority, IUser} from 'bend-core';
import {configUserSettings} from '../../..';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html'
})
export class UserCreateComponent implements OnInit {
  authorities: IAuthority[];
  user: IUser;
  usernameExist: boolean;

  constructor(
    private accountService: AccountService,
    private authorityService: AuthorityService,
    private router: Router,
    private appUtilService: AppUtilService,
    private activateRoute: ActivatedRoute,
    private dialog: DialogService
) { }

  ngOnInit() {
    this.activateRoute.data.subscribe(({user}) => {
      this.user = user;
    });
    this.fetchInitial();
  }

  private fetchInitial() {
    this.authorityService.fetchAll()
      .subscribe((res: HttpResponse<IAuthority[]>) => {
        if (res.status === httpStatus.OK) {
          this.authorities = res.body;
        } else {this.dialog.message('Error During Authority Fetch'); }
      }, (error: HttpErrorResponse) => {
        this.dialog.error('Error During Authority Fetch', error);
      });
  }

  save() {
    if (this.user.id != null) {
      this.accountService.update(this.user)
        .subscribe((res: HttpResponse<Map<string, object>>) => {
          if (res.status === httpStatus.OK) {
            this.messageShow('User Successfully Updated', true);
          } else {
            this.messageShow('Error During Update User', false);
          }
        }, (error: HttpErrorResponse) => {
          this.dialog.error('Error During Update User', error);
        });
    } else {
      this.accountService.save(this.user)
        .subscribe((res: HttpResponse<Map<string, object>>) => {
          if (res.status === httpStatus.OK) {
            this.messageShow('User Successfully saved', true);

          } else {
            this.messageShow('Error During save User', false);
          }
        }, (error: HttpErrorResponse) => {
          this.dialog.error('Error During save User', error);
        });
    }
  }

  private messageShow(message: string, isSuccess: boolean) {
    this.dialog.message(message);
    if (isSuccess) { this.dialog.goTo(['/management-dashboard/user-dashboard']); }
  }

  exist(authority: IAuthority): number {
    for (let i = 0; i < this.user.authorities.length;  i++) {
      if (this.user.authorities[i].name === authority.name) {
        return i;
      }
    }
    return -1;
  }

  checkUsername(username: string) {
    if (username.length >= configUserSettings.MIN_USER_LENGTH) {
      this.appUtilService.checkExistence('User', 'username', username)
        .subscribe((res: HttpResponse<boolean>) => {
          this.usernameExist = res.body;
        }, (error: HttpErrorResponse) => {
          this.dialog.error('Error during check Username', error);
          this.usernameExist = false;
        });
    }
  }
}
