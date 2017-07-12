import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../Services/server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  title = 'LetzChange Foundations Bhumi Campaigns';
  data: any = {};


  constructor(private service: ServerService){
    this.service.getData()
      .subscribe(res => this.data = res);
  }

  private  downloadData() {

    console.log('working');
    const arr = JSON.parse(JSON.stringify(this.data.response.docs));
    console.log(arr);
    Object.keys(arr).forEach(function(key){
      console.log(key + ': ' + arr[key]);
    });

    const dataURL = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(arr));
    const a = document.createElement('a');
    a.href = 'data:' + dataURL;
    a.download = 'datas.json';
    a.innerHTML = 'download JSON';

    const container = document.getElementById('container');
    container.appendChild(a);
    //const dataURL = 'data:text/svg+xml,' + 'https%3A%2F%2Fstaging.letzchange.org%2Fsearch%2F%3Ffq%3D(type%3Acampaign%2520AND%2520parent_name%3ABhumi)%26sort%3Dcreated_at%2520desc%26rows%3D337';
    // const dl = document.createElement("a");
    // document.body.appendChild(dl); // This line makes it work in Firefox.
    // dl.setAttribute("href", dataURL);
    // dl.setAttribute("download", "test.svg");
    // dl.click();

  }




}
