import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DateModifiedService {

  constructor(private _http: Http) { }

  getcreatedAt() {
    return this._http.get('https://staging.letzchange.org/search?fq=(type:nonprofit)&sort=created_at%20desc&row=20')
      .map(response => response.json());
  }

}
