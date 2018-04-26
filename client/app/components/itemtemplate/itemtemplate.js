import angular from 'angular';
import uiRouter from 'angular-ui-router';
import itemtemplateComponent from './itemtemplate.component';

let itemtemplateModule = angular.module('itemtemplate', [
  uiRouter
])

.component('itemtemplate', itemtemplateComponent)
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('itemtemplate', {
      url: '/itemtemplate',
      component: 'itemtemplate'
    });
})
.name;

export default itemtemplateModule;
