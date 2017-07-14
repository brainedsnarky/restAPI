import {Component, OnInit} from '@angular/core';
import {ServerService} from '../../Services/server.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'LetzChange Foundations Bhumi Campaigns';
  data: any = {};
  array_of_keys: any = [];

  showDownloadOptions = false;
  hide = true;

  constructor(private service: ServerService) {
    this.service.getData()
      .subscribe(res => this.data = res);
  }
  private expand() {
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
  }

  private downloadData() {

    // console.log('working');
    // const arr = JSON.parse(JSON.stringify(this.data.response.docs));
    // console.log(arr);
    // Object.keys(arr).forEach(function(key){
    //   console.log(key + ': ' + arr[key]);
    // });
    //
    // const dataURL = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(arr));
    // // const dlAnchorElem = document.getElementById('downloadAnchorElem');
    // // dlAnchorElem.setAttribute('href',     dataURL     );
    // // dlAnchorElem.setAttribute('download', 'data.json');
    // // dlAnchorElem.click();
    // const a = document.createElement('a');
    // a.href = 'data:' + dataURL;
    // a.download = 'datas.json';
    // a.innerHTML = 'download JSON';
    //
    // const container = document.getElementById('container');
    // container.appendChild(a);

  }

  ngOnInit() {
    // this.data.response.docs.forEach((d) => {
    //   Object.keys(d).forEach((key) => {
    //     if (this.array_of_keys.indexOf(key) === -1) {
    //       this.array_of_keys.push(key);
    //     }
    //   });
    // });
    // console.log(this.array_of_keys);
    //
    // function makeCheckboxes(str) {
    //   let a = document.getElementById('checkboxes');
    //   let returnStr = '';
    //   for (let i = 0; i < this.array_of_keys.length; i++) {
    //     returnStr += '<input type="checkbox" name="theCheckbox" value="' + this.array_of_keys[i] + '" />' + this.array_of_keys[i];
    //   }
    //   a.innerHTML = returnStr;
    // }
    //
    // window.onload = function () {
    //   makeCheckboxes('a,b,c,d,e');
    // };
  }




}

