import { Component} from '@angular/core';
import {AmntRaisedService} from '../../Services/amnt-raised.service';

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

  constructor(private amnt_service: AmntRaisedService) {
    this.amnt_service.getAmntRaised()
      .subscribe(res => this.amnt_raised_array = res);
  }

  private expand() {
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

  private  downloadData() {
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
