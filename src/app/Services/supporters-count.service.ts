import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SupportersCountService {

  constructor(private _http: Http) { }

  getSupportersCount() {
    return this._http.get('https://staging.letzchange.org/search?fq=(type:nonprofit)&sort=supporter_count%20asc&row=20')
      .map(response => response.json());
  }

}
