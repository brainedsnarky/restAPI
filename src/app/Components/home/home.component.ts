import {Component, OnInit} from '@angular/core';

import {Subject} from 'rxjs/Subject';

import {ServerService} from '../../Services/server.service';
import {SearchService} from '../../Services/search.service';
import {CampaignSearchService} from '../../Services/campaign-search.service';
import {ProjectSearchService} from '../../Services/project-search.service';
import {ProjectService} from '../../Services/project.service';
import {CreatorNameSearchService} from '../../Services/creator-name-search.service';
import {ParentNameCampaignSearchService} from '../../Services/parent-name-campaign-search.service';
import {Http} from "@angular/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'LetzChange Foundations Campaigns';
  data: any = {};
  array_of_keys: any = [];
  array_of_required_keys: any = [];

  showDownloadOptions = false;
  hide = true;

  results: any = {} ;
  searchTerm$ = new Subject<string>();
  AsearchTerm$ = new Subject<string>();


  constructor(private _http: Http , private service: ServerService , private getprojectService: ProjectService , private searchService: SearchService ,
              private campaignService: CampaignSearchService, private projectService: ProjectSearchService ,
              private creator_name: CreatorNameSearchService, private parent_namesearch: ParentNameCampaignSearchService ) {

    this.service.getData()
      .subscribe(res => this.data = res);

    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.data = results;
      });

    this.campaignService.search(this.searchTerm$)
      .subscribe(results => {
        this.data = results;
      });

    this.projectService.search(this.searchTerm$)
      .subscribe(results => {
        this.data = results;
      });

    this.creator_name.search(this.AsearchTerm$)
      .subscribe(results => {
        this.data = results;
      });

    this.parent_namesearch.search(this.AsearchTerm$)
      .subscribe(results => {
        this.data = results;
      });

  }

  HIDE() {
    this.showDownloadOptions = false;
    this.hide = true;
  }

   expand() {
    this.showDownloadOptions = true;
    this.hide = false;

    this.data.response.docs.forEach((d) => {
      Object.keys(d).forEach((key) => {
        if (this.array_of_keys.indexOf(key) === -1) {
          this.array_of_keys.push(key);
        }
      });
    });
    console.log(this.array_of_keys);
    console.log(Object.keys(this.array_of_keys));
  }

  ShowMore() {

   console.log(' Working.. ');
  //  this.data.push( this._http.get('https://staging.letzchange.org/search?fq=(type:campaign)&start=9&row=18')
  //     .map(response => response.json())
  //     .subscribe(results => {
  //       this.data = results;
  //     })
  // );

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
      let line = '';
      for (let index in array[i]) {
        if (line !== '') line += ','

        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  }

  showCampaigns() {
    this.service.getData()
      .subscribe(res => this.data = res);
  }

  showProjects() {
    this.getprojectService.getData()
      .subscribe(res => this.data = res);
  }

  downloadData() {

    let results = this.data.response.docs.map((d) => {
      const obj = {};
      this.array_of_required_keys.forEach((key) => {
        if (d[key]) {
          obj[key] = d[key];
        }
      });
      return obj;
    });

    console.log(results);
    const arr = JSON.parse(JSON.stringify(results));
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

  ngOnInit() { }
}

