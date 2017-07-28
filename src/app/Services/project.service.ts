import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

  constructor(private http: Http) { }

  getData() {return this.http.get('https://staging.letzchange.org/search?fq=(type:project)')
    .map(response => response.json());
  }

}
