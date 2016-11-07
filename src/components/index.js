import ng from 'angular';

import App from './app';
import ProjectsList from './projects-list';
import ProjectsItem from './projects-item';
import ProjectsDetail from './projects-detail';

export default ng.module('app.components', [App, ProjectsList, ProjectsItem, ProjectsDetail]).name;
