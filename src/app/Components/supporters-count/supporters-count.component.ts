import { Component } from '@angular/core';
import {SupportersCountService} from '../../Services/supporters-count.service';

@Component({
  selector: 'app-supporters-count',
  templateUrl: './supporters-count.component.html',
  styleUrls: ['./supporters-count.component.scss']
})
export class SupportersCountComponent {

  supporters_sort: any = {};


  constructor( private supporters_Service: SupportersCountService  ){
    this.supporters_Service.getSupportersCount()
      .subscribe(res => this.supporters_sort = res);
  }

  private  downloadData() {

    console.log('working');
      const arr = JSON.parse(JSON.stringify(this.supporters_sort.response.docs));
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
      a.download = 'data(supporters count).json';
      a.innerHTML = 'download JSON';

      const container = document.getElementById('container');
      container.appendChild(a);

  }

}
