import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../Services/search.service';
import {CampaignSearchService} from '../../Services/campaign-search.service';
import {ParentNameCampaignSearchService} from '../../Services/parent-name-campaign-search.service';
import {CreatorNameSearchService} from '../../Services/creator-name-search.service';
import {Subject} from 'rxjs/Subject';
import {ServerService} from 'app/Services/server.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  dataa: any = {};

  searchTerm$ = new Subject<string>();
  AsearchTerm$ = new Subject<string>();

  constructor( private service: ServerService, private searchService: SearchService ,
                private campaignService: CampaignSearchService, private creator_name: CreatorNameSearchService,
                private parent_namesearch: ParentNameCampaignSearchService) {


    this.service.getData()
      .subscribe(res => this.dataa = res);

    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.dataa = results;
      });

    this.campaignService.search(this.searchTerm$)
      .subscribe(results => {
        this.dataa = results;
      });

    this.creator_name.search(this.AsearchTerm$)
      .subscribe(results => {
        this.dataa = results;
      });

    this.parent_namesearch.search(this.AsearchTerm$)
      .subscribe(results => {
        this.dataa = results;
      });

  }

  ngOnInit() {
  }

}
