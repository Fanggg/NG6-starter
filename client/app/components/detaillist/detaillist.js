import angular from 'angular';
import uiRouter from 'angular-ui-router';
import detaillistComponent from './detaillist.component';

let detaillistModule = angular.module('detaillist', [
  uiRouter
])

.component('detaillist', detaillistComponent)
.controller('detaillistCtrl',detaillistCtrl)
.name;


function detaillistCtrl($state,$mdDialog,toastr){
  'ngInject';

  var self = this;
  self.payDetail = payDetail;
  self.ending =false;
  self.userdatas = JSON.parse(localStorage.getItem("user"))
  self.list = JSON.parse(localStorage.getItem("data")).list
  self.refresh = refresh;


  function payDetail(){
    $state.go('paydetail')
  }

  function refresh(){
    self.userdatas = JSON.parse(localStorage.getItem("user"))
    self.list = JSON.parse(localStorage.getItem("data")).list
    toastr.success("列表刷新成功")

  }

}


export default detaillistModule;
