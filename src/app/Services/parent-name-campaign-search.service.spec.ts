import { TestBed, inject } from '@angular/core/testing';

import { ParentNameCampaignSearchService } from './parent-name-campaign-search.service';

describe('ParentNameCampaignSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentNameCampaignSearchService]
    });
  });

  it('should be created', inject([ParentNameCampaignSearchService], (service: ParentNameCampaignSearchService) => {
    expect(service).toBeTruthy();
  }));
});
