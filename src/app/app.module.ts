import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

// Services
import { ServerService } from './Services/server.service';
import {ProjectService} from './Services/project.service';
import { SupportersCountService } from './Services/supporters-count.service';
import { DateModifiedService } from './Services/date-modified.service';
import { AmntRaisedService } from './Services/amnt-raised.service';
import { SearchService } from './Services/search.service';
import { CampaignSearchService } from './Services/campaign-search.service';
import {ProjectSearchService} from './Services/project-search.service';
import {CreatorNameSearchService} from './Services/creator-name-search.service';
import {ParentNameCampaignSearchService} from './Services/parent-name-campaign-search.service';
import { AdvancesSearchService } from './Services/advances-search.service';

// Components
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { SupportersCountComponent } from './Components/supporters-count/supporters-count.component';
import { CreatedAtComponent } from './Components/created-at/created-at.component';
import { AmountRaisedComponent } from './Components/amount-raised/amount-raised.component';
import { ProjectComponent } from './Components/project/project.component';
import { CampaignComponent } from './Components/campaign/campaign.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
  children: [
    {
      path: '',
      redirectTo: '/home/CampaignComponent',
      pathMatch: 'full'
    },
    {
      path: 'campaigns',
      component: CampaignComponent
    },
    {
      path: 'projects',
      component: ProjectComponent
    }
  ]},
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
    AmountRaisedComponent,
    ProjectComponent,
    CampaignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [SearchService, ServerService, ProjectService, SupportersCountService, DateModifiedService, CreatorNameSearchService,
    AmntRaisedService, CampaignSearchService, ProjectSearchService, ParentNameCampaignSearchService, AdvancesSearchService ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
