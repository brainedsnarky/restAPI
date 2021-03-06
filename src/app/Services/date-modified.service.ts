import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DateModifiedService {

  constructor(private _http: Http) { }

  getcreatedAt() {
    return this._http.get('https://staging.letzchange.org/search?fq=(type:campaign)&sort=created_at%20desc&start=10')
      .map(response => response.json());
  }

}
