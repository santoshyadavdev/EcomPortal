import { TestBed } from '@angular/core/testing';

import { EncDecService } from './enc-dec.service';

describe('EncDecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncDecService = TestBed.get(EncDecService);
    expect(service).toBeTruthy();
  });
});
