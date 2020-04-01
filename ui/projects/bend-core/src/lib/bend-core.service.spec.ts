import { TestBed } from '@angular/core/testing';

import { BendCoreService } from './bend-core.service';

describe('BendCoreService', () => {
  let service: BendCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BendCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
