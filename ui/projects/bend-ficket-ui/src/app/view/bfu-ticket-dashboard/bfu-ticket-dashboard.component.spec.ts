import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BfuTicketDashboardComponent } from './bfu-ticket-dashboard.component';

describe('BfuTicketDashboardComponent', () => {
  let component: BfuTicketDashboardComponent;
  let fixture: ComponentFixture<BfuTicketDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BfuTicketDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BfuTicketDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
