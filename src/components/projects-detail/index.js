import ng from 'angular';

import ProjectsDetailComponent from './projects-detail.component';

export default ng.module('app.components.project.detail', [])
  .component('projectsDetail', ProjectsDetailComponent)
  .name;
