import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CampaignSearchService {

  baseUrl: string = 'https://staging.letzchange.org/';
  queryUrl: string = 'search?q=';
  restOfBaseUrl: string = '~&fq=(type:campaign)&rows=10';

  constructor(private http: Http) { }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    if ( term.length > 0 ) {
      return this.http
        .get(this.baseUrl + this.queryUrl + term + this.restOfBaseUrl)
        .map(response => response.json());
    }
    return this.http
      .get('https://staging.letzchange.org/search?fq=(type:campaign)&rows=20')
      .map(response => response.json());
  }

}
