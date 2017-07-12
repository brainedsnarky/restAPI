import { TestBed, inject } from '@angular/core/testing';

import { DateModifiedService } from './date-modified.service';

describe('DateModifiedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateModifiedService]
    });
  });

  it('should be created', inject([DateModifiedService], (service: DateModifiedService) => {
    expect(service).toBeTruthy();
  }));
});
