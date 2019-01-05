import { TestBed } from '@angular/core/testing';

import { MinApiService } from './min-api.service';

describe('MinApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinApiService = TestBed.get(MinApiService);
    expect(service).toBeTruthy();
  });
});
