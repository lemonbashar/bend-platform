import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BendCoreUiComponent } from './bend-core-ui.component';

describe('BendCoreUiComponent', () => {
  let component: BendCoreUiComponent;
  let fixture: ComponentFixture<BendCoreUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BendCoreUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BendCoreUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
