import angular from 'angular';
import uiRouter from 'angular-ui-router';
import wuyishanComponent from './wuyishan.component';

let wuyishanModule = angular.module('wuyishan', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('wuyishan', {
      url: '/wuyishan',
      component: 'wuyishan'
    });
})

.component('wuyishan', wuyishanComponent)

.name;

export default wuyishanModule;
