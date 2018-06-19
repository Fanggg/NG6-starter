import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rightlistComponent from './rightlist.component';

let rightlistModule = angular.module('rightlist', [
  uiRouter
])

.component('rightlist', rightlistComponent)
.controller('rightlistCtrl',rightlistCtrl)
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('rightlist', {
      url: '/rightlist',
      component: 'rightlist'
    });
})
.name;



function rightlistCtrl($state) {
  'ngInject';

  var self = this;
  self.list = JSON.parse(localStorage.getItem("order"))
  self.changedata = changedata;
  console.log(self.list)
  function changedata(e){
    if(e == "fuzhou"){
      return "福州"
    }
    if(e == "xiamen"){
      return "厦门"
    }
    if(e == "wuyishan"){
      return "武夷山"
    }
  }
}

export default rightlistModule;
