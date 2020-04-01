import { Component, OnInit } from '@angular/core';
import {AuthorityService} from '../authority.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {AppUtilService, Authority, DialogService, httpStatus, IAuthority} from 'bend-core';

@Component({
  selector: 'app-authority-create',
  templateUrl: './authority-create.component.html'
})
export class AuthorityCreateComponent implements OnInit {

  authority: IAuthority;
  authorityExist: boolean;

  constructor(
    private authorityService: AuthorityService,
    private appUtilService: AppUtilService,
    private router: Router,
    private dialog: DialogService
  ) { }

  ngOnInit() {
    this.authority = new Authority(null);
  }

  checkAuthorityName(name: string) {
    this.authorityExist = false;
    this.appUtilService.checkExistence('Authority', 'name', name)
      .subscribe((res: HttpResponse<boolean>) => {
        if (res.status === httpStatus.OK) {
          this.authorityExist = res.body;
        } else {this.dialog.message('Error During Check Authority Name Exist'); }
      }, (error: HttpErrorResponse) => {
        this.dialog.error('Error During Check Authority Name Exist', error);
        this.authorityExist = false;
      });
  }

  saveAuthority() {
    this.authorityService.save(this.authority)
      .subscribe((res: HttpResponse<Map<string, object>>) => {
        if (res.status === httpStatus.OK) {
          this.dialog.message('Authority Successfully Saved').goTo(['/management-dashboard/authority-dashboard']);
        } else {this.dialog.message('Error During Save Authority');}
      }, (error: HttpErrorResponse) => {
        this.dialog.error('Error During Save Authority', error);
      });
  }
}
