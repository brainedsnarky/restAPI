import { TestBed, inject } from '@angular/core/testing';

import { AmntRaisedService } from './amnt-raised.service';

describe('AmntRaisedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmntRaisedService]
    });
  });

  it('should be created', inject([AmntRaisedService], (service: AmntRaisedService) => {
    expect(service).toBeTruthy();
  }));
});
