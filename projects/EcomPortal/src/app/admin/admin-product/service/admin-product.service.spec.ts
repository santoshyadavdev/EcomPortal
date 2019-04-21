import { TestBed } from '@angular/core/testing';

import { AdminProductService } from './admin-product.service';

describe('AdminProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminProductService = TestBed.get(AdminProductService);
    expect(service).toBeTruthy();
  });
});
