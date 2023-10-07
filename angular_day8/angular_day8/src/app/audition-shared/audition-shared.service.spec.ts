import { TestBed } from '@angular/core/testing';

import { AuditionSharedService } from './audition-shared.service';

describe('AuditionSharedService', () => {
  let service: AuditionSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditionSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
