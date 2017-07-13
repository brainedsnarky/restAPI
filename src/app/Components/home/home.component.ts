import { Component } from '@angular/core';
import {ServerService} from '../../Services/server.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  title = 'LetzChange Foundations Bhumi Campaigns';
  data: any = {};


  constructor(private service: ServerService) {
    this.service.getData()
      .subscribe(res => this.data = res);
  }

  private downloadData() {
    console.log('working');
    const arr = JSON.parse(JSON.stringify(this.data.response.docs));
    console.log(arr);
    Object.keys(arr).forEach(function(key){
      console.log(key + ': ' + arr[key]);
    });

    const dataURL = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(arr));
    // const dlAnchorElem = document.getElementById('downloadAnchorElem');
    // dlAnchorElem.setAttribute('href',     dataURL     );
    // dlAnchorElem.setAttribute('download', 'data.json');
    // dlAnchorElem.click();
    const a = document.createElement('a');
    a.href = 'data:' + dataURL;
    a.download = 'datas.json';
    a.innerHTML = 'download JSON';

    const container = document.getElementById('container');
    container.appendChild(a);

  }

  private  showMore(){

  }

}

