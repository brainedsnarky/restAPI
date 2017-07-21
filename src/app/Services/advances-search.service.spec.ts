import { TestBed, inject } from '@angular/core/testing';

import { AdvancesSearchService } from './advances-search.service';

describe('AdvancesSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvancesSearchService]
    });
  });

  it('should be created', inject([AdvancesSearchService], (service: AdvancesSearchService) => {
    expect(service).toBeTruthy();
  }));
});
