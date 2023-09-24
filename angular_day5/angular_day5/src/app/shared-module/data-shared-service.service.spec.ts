import { TestBed } from '@angular/core/testing';

import { DataSharedServiceService } from './data-shared-service.service';

describe('DataSharedServiceService', () => {
  let service: DataSharedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSharedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
