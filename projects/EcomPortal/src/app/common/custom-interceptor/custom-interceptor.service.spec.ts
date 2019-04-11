import { TestBed } from '@angular/core/testing';

import { CustomInterceptorService } from './custom-interceptor.service';

describe('CustomInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomInterceptorService = TestBed.get(CustomInterceptorService);
    expect(service).toBeTruthy();
  });
});
