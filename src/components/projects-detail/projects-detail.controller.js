export default class ProjectsDetailController {
  constructor(ProjectService, $stateParams) {
    'ngInject';
    this.ProjectService = ProjectService;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    const repo = this.$stateParams.id;
    this.ProjectService.detail(repo).then((result) => { this.item = result; });
  }
}
