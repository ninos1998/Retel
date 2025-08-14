import { Component, OnInit } from '@angular/core';
import { ProjectDetailSectionComponent } from '@sections/projects/project-detail-section/project-detail-section.component';
import { SimilarProjects1Component } from '@sections/projects/similar-projects1/similar-projects1.component';
import { ProjectsService } from '@services/projects.service';

/**
 * Defines functional view for Project-Detail page.
 */
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  standalone: true,
  imports: [
    ProjectDetailSectionComponent,
    // SimilarProjects1Component
  ]
})
export class ProjectDetailsComponent implements OnInit {
  _data: any
  ngOnInit() {
    const projectTitle = localStorage.getItem('projectTitle'); // récupère depuis localStorage
    if (projectTitle) {
        this._data = new ProjectsService().getProjectDetailDataByTitle(projectTitle)
      // this._data = this.projectsService.getProjectDetailDataByTitle(projectTitle);
    } else {
      console.warn('Aucun titre trouvé dans le localStorage');
    }
  }
  /**
   * Constructor
   */
  constructor() {
  }

  /**
   * Fetching entire page data (for all sections) 
   * and passing to view/component
   * 
   * (Here we are just demostrating sample data from json, 
   * in real scenario, proper type should be defined for '_data', before handling)
   */


        
  // _data = new ProjectsService().getProjectDetailDataByTitle('ARRU');
}
