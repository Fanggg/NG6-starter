import angular from 'angular';
import uiRouter from 'angular-ui-router';
import orderdetailComponent from './orderdetail.component';

let orderdetailModule = angular.module('orderdetail', [
  uiRouter
])

.component('orderdetail', orderdetailComponent)

.name;

export default orderdetailModule;
