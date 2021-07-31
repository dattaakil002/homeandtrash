import { TestBed } from '@angular/core/testing';

import { HometrashserviceService } from './hometrashservice.service';

describe('HometrashserviceService', () => {
  let service: HometrashserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HometrashserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
