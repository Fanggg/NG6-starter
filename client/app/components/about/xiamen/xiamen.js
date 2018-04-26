import angular from 'angular';
import uiRouter from 'angular-ui-router';
import xiamenComponent from './xiamen.component';

let xiamenModule = angular.module('xiamen', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('xiamen', {
      url: '/xiamen',
      component: 'xiamen'
    });
})

.component('xiamen', xiamenComponent)

.name;

export default xiamenModule;
