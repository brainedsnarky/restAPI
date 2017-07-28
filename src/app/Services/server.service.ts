import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  getData() {return this.http.get('https://staging.letzchange.org/search?fq=(type:campaign)rows=337')
      .map(response => response.json());
  }

}
