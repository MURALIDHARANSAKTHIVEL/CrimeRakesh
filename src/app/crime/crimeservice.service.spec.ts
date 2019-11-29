import { TestBed } from '@angular/core/testing';

import { CrimeserviceService } from './crimeservice.service';

describe('CrimeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrimeserviceService = TestBed.get(CrimeserviceService);
    expect(service).toBeTruthy();
  });
});
