import { TestBed } from '@angular/core/testing';

import { AdminproductsService } from './adminproducts.service';

describe('AdminproductsService', () => {
  let service: AdminproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
