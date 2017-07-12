import { TestBed, inject } from '@angular/core/testing';

import { SupportersCountService } from './supporters-count.service';

describe('SupportersCountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupportersCountService]
    });
  });

  it('should be created', inject([SupportersCountService], (service: SupportersCountService) => {
    expect(service).toBeTruthy();
  }));
});
