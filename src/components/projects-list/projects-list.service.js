/* global TOKEN */

export default class ProjectService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  list() {
    const date = ProjectService.getDate();
    const url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&access_token=${TOKEN.join('')}`;
    return this.$http.get(url).then(result => result.data.items);
  }

  detail(repo) {
    const url = `https://api.github.com/repos/${repo}?access_token=${TOKEN.join('')}`;
    const data = {};
    return this.$http.get(url).then((result) => {
      data.detail = result.data;
      return data;
    })
    .then(result => (this.$http.get(`${result.detail.events_url}?access_token=${TOKEN.join('')}`)))
    .then((result) => {
      data.events = result.data;
      return data;
    })
    .then(result => (this.$http.get(`${result.detail.contributors_url}?access_token=${TOKEN.join('')}`)))
    .then((result) => {
      data.contributors = result.data;
      return data;
    })
    .then(result => (this.$http.get(`${result.detail.url}/issues?access_token=${TOKEN.join('')}`)))
    .then((result) => {
      data.issues = result.data;
      return data;
    })
    .then(result => (this.$http.get(`${result.detail.url}/labels?access_token=${TOKEN.join('')}`)))
    .then((result) => {
      data.labels = result.data;
      return data;
    })
    .then(result => (this.$http.get(`${result.detail.url}/commits?access_token=${TOKEN.join('')}`)))
    .then((result) => {
      data.commits = result.data;
      return data;
    });
  }

  static getDate() {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  }
}
