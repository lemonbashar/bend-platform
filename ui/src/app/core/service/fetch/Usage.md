```typescript
import {Component, OnInit} from '@angular/core';
import {AccountService, AppUtilService, IUser} from '../../..';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {httpStatus} from '../../../security/http/http-status';
import {FieldDefinition} from '../../../model/app-util.model';
import {DialogService} from '../../../service/dialog/dialog.service';
import {SqlFetchDefinitionService} from '../../../service/fetch/sql-fetch-definition.service';
import {IFetchResponse} from '../../../model/fetch/fetch-response.model';
import {IJoinType, SqlFetchDefinition, SqlJoin} from '../../../model/fetch/fetch-definition.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html'
})
export class UserDashboardComponent implements OnInit {
  users: IUser[];

  constructor(
    private accountService: AccountService,
    private appUtilService: AppUtilService,
    private dialog: DialogService,
    private sqlFetchService: SqlFetchDefinitionService
  ) { }

  ngOnInit() {
    this.fetchAll();
    this.fetchSetting();
  }

  private fetchAll() {
    this.accountService.fetchAll()
      .subscribe((res: HttpResponse<IUser[]>) => {
        this.users = res.body;
      }, (error: HttpErrorResponse) => {
        this.dialog.message('Error During Fetch');
      });
  }

  revertActivateUser(user: IUser) {
    this.appUtilService.updateAll([new FieldDefinition(user.id, 'User', 'active', String(!user.active))])
      .subscribe((res: HttpResponse<Map<string, object>>) => {
        if (res.status === httpStatus.OK) {
          user.active = !user.active;
        }
      }, (error: HttpErrorResponse) => {
        this.dialog.error('Error-Occurred During Batch Update', error);
      });
  }

  deleteUser(user: IUser) {
    this.accountService.delete(user.id)
      .subscribe((res: HttpResponse<Map<string, object>>) => {
        if (res.status === httpStatus.OK) {
          this.dialog.message('Delete Success');
          this.users.splice(this.users.indexOf(user), 1);
        } else {
          this.dialog.message('Delete Error');
        }
      }, (error: HttpErrorResponse) => {
        this.dialog.error('Error During Delete user', error);
      });
  }

  private fetchAll2() {
    const fd = new SqlFetchDefinition();
    fd.columns = ['cb.username', 'model.createBy.username', 'model.updateBy.username'];
    fd.condition = 'model.id=:uid';
    fd.parameters = [{name: 'uid', value: 'SPEL:@authService.currentUserId()'}];
    // fd.joins = [new SqlJoin(IJoinType.INNER_JOIN, 'model', 'authorities', 'auth')];
    fd.joins = [new SqlJoin(IJoinType.INNER_JOIN, 'model', 'createBy', 'cb')];
    // fd.joins = [new SqlJoin(IJoinType.INNER_JOIN, 'model', 'createBy', 'cb'), new SqlJoin(IJoinType.INNER_JOIN, 'cb', 'updateBy', 'ub')];
    fd.domain = 'User';
    fd.key = 'D1';

    this.sqlFetchService.fetch([fd])
      .subscribe((res: HttpResponse<Map<string, IFetchResponse>>) => {
        console.log(res.body);
      }, (error: HttpErrorResponse) => {
        this.dialog.error('Error Occurred on Fetch Definition', error);
      });
  }

  private fetchSetting() {
    const fd = new SqlFetchDefinition();
    fd.columns = ['model.typeName', 'model.typeValue', 'model.title', 'cb.username', 'model.updateBy.username'];
    fd.joins = [new SqlJoin(IJoinType.INNER_JOIN, 'model', 'createBy', 'cb')];
    fd.domain = 'MiscellaneousSetup';
    fd.key = 'SET01';

    const tS = new SqlFetchDefinition();
    tS.columns = ['token.token', 'token.ipAddress', 'token.totalRequest', 'token.user.username'];
    tS.domain = 'TokenStore';
    tS.alias = 'token';
    tS.key = 'TKSTR1';

    this.sqlFetchService.fetch([fd, tS])
      .subscribe((res: HttpResponse<Map<string, IFetchResponse>>) => {
        console.log(res.body);
      }, (error: HttpErrorResponse) => {
        this.dialog.error('Error Occurred on Fetch Definition', error);
      });
  }
}


```
