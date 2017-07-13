import { Component } from '@angular/core';
import {DateModifiedService} from '../../Services/date-modified.service';

@Component({
  selector: 'app-created-at',
  templateUrl: './created-at.component.html',
  styleUrls: ['./created-at.component.scss']
})
export class CreatedAtComponent  {

  created_at_array: any = {};

  constructor(private date_service: DateModifiedService) {
    this.date_service.getcreatedAt()
      .subscribe(res => this.created_at_array = res);
  }

  private  downloadData() {
      console.log('working');
      const arr = JSON.parse(JSON.stringify(this.created_at_array.response.docs));
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
      a.download = 'data(DateModified).json';
      a.innerHTML = 'download JSON';

      const container = document.getElementById('container');
      container.appendChild(a);

    }


  }
