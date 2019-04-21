import { TestBed } from '@angular/core/testing';

import { PrimaryService } from './primary.service';

describe('PrimaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimaryService = TestBed.get(PrimaryService);
    expect(service).toBeTruthy();
  });
});
