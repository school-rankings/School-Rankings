import { TestBed } from '@angular/core/testing';

import { MiddleService } from './middle.service';

describe('MiddleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiddleService = TestBed.get(MiddleService);
    expect(service).toBeTruthy();
  });
});
