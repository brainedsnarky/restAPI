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

  }

}
