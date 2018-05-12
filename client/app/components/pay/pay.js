import angular from 'angular';
import uiRouter from 'angular-ui-router';
import payComponent from './pay.component';

let payModule = angular.module('pay', [
  uiRouter
])

.component('pay', payComponent)
.controller('payCtrl',payCtrl)
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('pay', {
      url: '/pay',
      component: 'pay'
    });
})
.name;

function payCtrl(){
  'ngInject';
  
  var self = this;
  self.user = JSON.parse(localStorage.getItem("user"))
}

export default payModule;
