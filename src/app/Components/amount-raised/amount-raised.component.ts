import { Component} from '@angular/core';
import {AmntRaisedService} from '../../Services/amnt-raised.service';
import {SearchService} from '../../Services/search.service';
import {Subject} from 'rxjs/Subject';
import {CampaignSearchService} from '../../Services/campaign-search.service';
import {ProjectSearchService} from '../../Services/project-search.service';
import {Http} from '@angular/http';
import {CreatorNameSearchService} from '../../Services/creator-name-search.service';
import {ParentNameCampaignSearchService} from '../../Services/parent-name-campaign-search.service';

@Component({
  selector: 'app-amount-raised',
  templateUrl: './amount-raised.component.html',
  styleUrls: ['./amount-raised.component.scss']
})
export class AmountRaisedComponent {

  amnt_raised_array: any = {};
  array_of_keys: any = [];
  array_of_required_keys: any = [];

  showDownloadOptions = false;
  hide = true;

  results: any = {} ;
  searchTerm$ = new Subject<string>();

  constructor(private _http: Http, private amnt_service: AmntRaisedService, private  searchService: SearchService ,
              private campaignService: CampaignSearchService, private  projectService: ProjectSearchService,
              private creator_name: CreatorNameSearchService, private parent_namesearch: ParentNameCampaignSearchService) {

    this.amnt_service.getAmntRaised()
      .subscribe(res => this.amnt_raised_array = res);

    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.amnt_raised_array = results;
      });

    this.campaignService.search(this.searchTerm$)
      .subscribe(results => {
        this.amnt_raised_array = results;
      });

    this.projectService.search(this.searchTerm$)
      .subscribe(results => {
        this.amnt_raised_array = results;
      });

    this.creator_name.search(this.searchTerm$)
      .subscribe(results => {
        this.amnt_raised_array = results;
      });

    this.parent_namesearch.search(this.searchTerm$)
      .subscribe(results => {
        this.amnt_raised_array = results;
      });
  }

  HIDE() {
    this.showDownloadOptions = false;
    this.hide = true;
  }

  expand() {
    this.showDownloadOptions = true;
    this.hide = false;

    this.amnt_raised_array.response.docs.forEach((d) => {
      Object.keys(d).forEach((key) => {
        if (this.array_of_keys.indexOf(key) === -1) {
          this.array_of_keys.push(key);
        }
      });
    });
    console.log(this.array_of_keys);
    console.log(Object.keys(this.array_of_keys));
  }

  showCampaigns() {
    return this._http.get('https://staging.letzchange.org/search?fq=(type:campaign)&sort=raised_amount_in_inr%20asc&row=10')
      .map(response => response.json())
      .subscribe(res => this.amnt_raised_array = res);
  }

  showProjects() {
    return this._http.get('https://staging.letzchange.org/search?fq=(type:project)&sort=raised_amount_in_inr%20asc&row=10')
      .map(response => response.json())
      .subscribe(res => this.amnt_raised_array = res);
  }

  updateChecked2(value, event) {
    if (event.target.checked) {
      this.array_of_required_keys.push(value);
    }
    if (!event.target.checked) {
      const indexx = this.array_of_required_keys.indexOf(value);
      this.array_of_required_keys.splice(indexx, 1);
    }
    console.log(this.array_of_required_keys);
  }

  ConvertToCSV(objArray) {
    let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = "";

    for ( let index in objArray[0]) {

      row += index + ',';
    }
    row = row.slice(0, -1);

    str += row + '\r\n';

    for (let i = 0; i < array.length; i++) {
      var line = '';
      for (let  index in array[i]) {
        if (line !== '') line += ','

        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  }

  downloadData() {
    let results = this.amnt_raised_array.response.docs.map((d) => {
      const obj = {};
      this.array_of_required_keys.forEach((key) => {
        if (d[key]) {
          obj[key] = d[key];
        }
      });
      return obj;
    });

    console.log('working');
    const arr = JSON.parse(JSON.stringify(results));
    console.log(arr);
    Object.keys(arr).forEach(function(key){
      console.log(key + ': ' + arr[key]);
    });

    const csvData = this.ConvertToCSV(results);
    const a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'SampleExport.csv';
    a.click();



  }


}
