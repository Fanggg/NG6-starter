import angular from 'angular';
import uiRouter from 'angular-ui-router';
import fuzhouComponent from './fuzhou.component';

let fuzhouModule = angular.module('fuzhou', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('fuzhou', {
      url: '/fuzhou',
      component: 'fuzhou'
    });
})

.component('fuzhou', fuzhouComponent)

.name;

export default fuzhouModule;
