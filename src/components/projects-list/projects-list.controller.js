export default class ProjectsListController {
  constructor(ProjectService) {
    'ngInject';
    this.ProjectService = ProjectService;
  }

  $onInit() {
    this.ProjectService.list().then(result => (this.items = result));
  }
}
