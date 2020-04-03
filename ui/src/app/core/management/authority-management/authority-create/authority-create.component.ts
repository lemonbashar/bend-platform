import {Component, OnInit} from '@angular/core';
import {AuthorityService} from '../authority.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {AppUtilService, AuthorityCrudData, BendResponse, BendStatus, ConsoleService, httpStatus} from 'bend-core';

@Component({
  selector: 'app-authority-create',
  templateUrl: './authority-create.component.html'
})
export class AuthorityCreateComponent implements OnInit {

  authority: AuthorityCrudData;
  authorityExist: boolean;

  constructor(
    private authorityService: AuthorityService,
    private appUtilService: AppUtilService,
    private router: Router,
    private consoleService: ConsoleService
  ) { }

  ngOnInit() {
    this.authority = new AuthorityCrudData();
  }

  checkAuthorityName(name: string) {
    this.authorityExist = false;
    this.appUtilService.checkExistence('Authority', 'name', name)
      .subscribe((res: HttpResponse<boolean>) => {
        if (res.status === httpStatus.OK) {
          this.authorityExist = res.body;
        } else {this.consoleService.message('Error During Check Authority Name Exist'); }
      }, (error: HttpErrorResponse) => {
        this.consoleService.error('Error During Check Authority Name Exist', error);
        this.authorityExist = false;
      });
  }

  saveAuthority() {
    this.authorityService.save(this.authority)
      .subscribe((res: HttpResponse<BendResponse>) => {
        if (res.body.status === BendStatus.SUCCESS) {
          this.consoleService.message('Authority Successfully Saved').goTo(['/management-dashboard/authority-dashboard']);
        } else {this.consoleService.message('Error During Save Authority'); }
      }, (error: HttpErrorResponse) => {
        this.consoleService.error('Error During Save Authority', error);
      });
  }
}
