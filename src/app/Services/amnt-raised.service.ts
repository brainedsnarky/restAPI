import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AmntRaisedService {

  constructor(private _http: Http) { }

  getAmntRaised() {
    return this._http.get('https://staging.letzchange.org/search?fq=(type:campaign)&sort=raised_amount_in_inr%20asc')
      .map(response => response.json());
  }

}
