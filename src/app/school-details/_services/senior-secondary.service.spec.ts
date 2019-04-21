import { TestBed } from '@angular/core/testing';

import { SeniorSecondaryService } from './senior-secondary.service';

describe('SeniorsecondaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeniorSecondaryService = TestBed.get(SeniorSecondaryService);
    expect(service).toBeTruthy();
  });
});
