import { Component} from '@angular/core';
import {AmntRaisedService} from '../../Services/amnt-raised.service';

@Component({
  selector: 'app-amount-raised',
  templateUrl: './amount-raised.component.html',
  styleUrls: ['./amount-raised.component.scss']
})
export class AmountRaisedComponent {

  amnt_raised_array: any = {};

  constructor(private amnt_service: AmntRaisedService) {
    this.amnt_service.getAmntRaised()
      .subscribe(res => this.amnt_raised_array = res);
  }

  private  downloadData() {
    console.log('working');
    const arr = JSON.parse(JSON.stringify(this.amnt_raised_array.response.docs));
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
    a.download = 'data(AmountRaised).json';
    a.innerHTML = 'download JSON';

    const container = document.getElementById('container');
    container.appendChild(a);

  }


}
