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
    console.log('Working....');
  }


  }
