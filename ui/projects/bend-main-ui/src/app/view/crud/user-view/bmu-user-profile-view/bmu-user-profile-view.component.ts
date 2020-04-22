import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Route, Router, RouterEvent} from '@angular/router';
import {BmuUserCrudService} from '../../../../service/bmu-user-crud.service';
import {BendStatusText, ConsoleService, DataResponse, UserCrudData} from 'bend-core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {BendToastService} from 'bend-core-ui';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'main-bmu-user-profile-view',
  templateUrl: './bmu-user-profile-view.component.html'
})
export class BmuUserProfileViewComponent implements OnInit {
  private uid: number;
  userCrudData: UserCrudData;
  ready: boolean;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private userCrudService: BmuUserCrudService,
    private toastService: BendToastService,
    private consoleService: ConsoleService
  ) { }

  ngOnInit(): void {
    this.ready = false;
    this.route.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.doInRoute();
    });
    this.doInRoute();
  }

  private fetchProfile() {
    if (this.uid === 0)
      this.userCrudService.findByCurrentUser().subscribe((res: HttpResponse<DataResponse<UserCrudData>>) => {
        this.response(res);
      }, (error: HttpErrorResponse) => {
        this.error(error);
      });
    else
      this.userCrudService.findOne(this.uid).subscribe((res: HttpResponse<DataResponse<UserCrudData>>) => {
        this.response(res);
      }, (error: HttpErrorResponse) => {
        this.error(error);
      });
  }

  private response(res: HttpResponse<DataResponse<UserCrudData>>) {
    if (res.ok && res.body.status.toString() === BendStatusText.SUCCESS) {
      this.userCrudData = res.body.data;
      this.ready = true;
      this.consoleService.message('Data Fetch Successfully');
    } else this.toastService.error('Cannot find targeted Profile');
  }

  private error(error: HttpErrorResponse) {
    this.toastService.error('Cannot fetch Profile Info');
    this.consoleService.error('Cannot fetch Profile, Internal Server Error', error);
  }

  private doInRoute() {
    this.uid = Number(this.activatedRoute.snapshot.params.id);
    if (this.uid == null)
      this.toastService.error('Cannot Retrieve User-Profile Instruction');
    else this.fetchProfile();
  }
}
