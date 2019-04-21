import { TestBed } from '@angular/core/testing';

import { SecondaryService } from './secondary.service';

describe('SecondaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecondaryService = TestBed.get(SecondaryService);
    expect(service).toBeTruthy();
  });
});
