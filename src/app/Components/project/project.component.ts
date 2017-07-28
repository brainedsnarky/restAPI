import { Component, OnInit } from '@angular/core';
import {ProjectSearchService} from '../../Services/project-search.service';
import {ProjectService} from '../../Services/project.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  dataa: any = {};

  searchTerm$ = new Subject<string>();
  AsearchTerm$ = new Subject<string>();

  constructor(private getprojectService: ProjectService, private projectService: ProjectSearchService) {

    this.getprojectService.getData()
      .subscribe(res => this.dataa = res);

    this.projectService.search(this.searchTerm$)
      .subscribe(results => {
        this.dataa = results;
      });

    this.projectService.search(this.AsearchTerm$)
      .subscribe(results => {
        this.dataa = results;
      });

  }

  ngOnInit() {
  }

}
