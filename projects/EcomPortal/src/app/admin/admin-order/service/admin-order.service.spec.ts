import { TestBed } from '@angular/core/testing';

import { AdminOrderService } from './admin-order.service';

describe('AdminOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminOrderService = TestBed.get(AdminOrderService);
    expect(service).toBeTruthy();
  });
});
