import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SupportersCountService {

  constructor(private _http: Http) { }

  getSupportersCount() {
    return this._http.get('https://staging.letzchange.org/search?fq=(type:campaign)&sort=supporter_count%20asc')
      .map(response => response.json());
  }

}
