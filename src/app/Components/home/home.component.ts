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
  array_of_required_keys: any = [];

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

  ConvertToCSV(objArray) {
    let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = "";

    for ( let index in objArray[0]) {
      //Now convert each value to string and comma-separated
      row += index + ',';
    }
    row = row.slice(0, -1);
    //append Label row with line break
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

  private downloadData() {

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

    var csvData = this.ConvertToCSV(results);
    var a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url= window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'SampleExport.csv';
    a.click();

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

  ngOnInit() { }
}

