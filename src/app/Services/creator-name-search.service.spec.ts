import { TestBed, inject } from '@angular/core/testing';

import { CreatorNameSearchService } from './creator-name-search.service';

describe('CreatorNameSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatorNameSearchService]
    });
  });

  it('should be created', inject([CreatorNameSearchService], (service: CreatorNameSearchService) => {
    expect(service).toBeTruthy();
  }));
});
