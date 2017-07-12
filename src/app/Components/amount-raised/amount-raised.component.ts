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


}
