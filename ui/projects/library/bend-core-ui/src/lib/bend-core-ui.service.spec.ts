import { TestBed } from '@angular/core/testing';

import { BendCoreUiService } from './bend-core-ui.service';

describe('BendCoreUiService', () => {
  let service: BendCoreUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BendCoreUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
