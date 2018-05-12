import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rightlistComponent from './rightlist.component';

let rightlistModule = angular.module('rightlist', [
  uiRouter
])

.component('rightlist', rightlistComponent)
.controller('rightlistCtrl',rightlistCtrl)
.name;

function rightlistCtrl($state) {
  'ngInject';

  var self = this;
  self.list = [{name:"武夷山双人三日游",url:"wuyishan"},{name:"1",id:"1"},{name:"1"},{name:"1"},{name:"1"},{name:"1"}]
  self.checkDetail = checkDetail;

  function checkDetail(item){
    console.log(item)
    if(item.id){
      console.log(item.id)
    }else{
      console.log(333)
      $state.go(item.url)
    }

    localStorage.setItem("listdata",JSON.stringify(self.list))
  }
}

export default rightlistModule;
