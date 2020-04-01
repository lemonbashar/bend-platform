import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BendCoreComponent } from './bend-core.component';

describe('BendCoreComponent', () => {
  let component: BendCoreComponent;
  let fixture: ComponentFixture<BendCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BendCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BendCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
