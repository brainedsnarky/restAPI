import { TestBed, inject } from '@angular/core/testing';

import { CampaignSearchService } from './campaign-search.service';

describe('CampaignSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignSearchService]
    });
  });

  it('should be created', inject([CampaignSearchService], (service: CampaignSearchService) => {
    expect(service).toBeTruthy();
  }));
});
