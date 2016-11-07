import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';
import 'open-sans-fontface/open-sans.less';
import 'animate.css/animate.css';
import './assets/less/style.less';

import ng from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components';
import Config from './index.config';

ng.module('app', [Components, uiRouter])
  .config(Config);
