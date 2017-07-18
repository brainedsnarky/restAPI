import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

// Services
import { ServerService } from './Services/server.service';
import { SupportersCountService } from './Services/supporters-count.service';
import { DateModifiedService } from './Services/date-modified.service';
import { AmntRaisedService } from './Services/amnt-raised.service';
import { SearchService } from './Services/search.service';
import { CampaignSearchService } from './Services/campaign-search.service';
import {ProjectSearchService} from './Services/project-search.service';

// Components
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { SupportersCountComponent } from './Components/supporters-count/supporters-count.component';
import { CreatedAtComponent } from './Components/created-at/created-at.component';
import { AmountRaisedComponent } from './Components/amount-raised/amount-raised.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'supporters_count', component: SupportersCountComponent },
  { path: 'created_at', component: CreatedAtComponent },
  { path: 'amount_raised', component: AmountRaisedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SupportersCountComponent,
    CreatedAtComponent,
    AmountRaisedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [SearchService, ServerService,
    SupportersCountService, DateModifiedService,
    AmntRaisedService, CampaignSearchService, ProjectSearchService ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
