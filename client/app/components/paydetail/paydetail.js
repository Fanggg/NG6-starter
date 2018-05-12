import angular from 'angular';
import uiRouter from 'angular-ui-router';
import paydetailComponent from './paydetail.component';
import { userdetialCtrl } from './common/userdetial/userdetial';

let paydetailModule = angular.module('paydetail', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('paydetail', {
      url: '/paydetail',
      component: 'paydetail'
    });
})


.component('paydetail', paydetailComponent)
.controller('paydetailCtrl',paydetailCtrl)

.name;

function paydetailCtrl(toastr,$mdDialog){
  "ngInject";

  var self = this;
  self.selected = [];
  self.carddata = JSON.parse(localStorage.getItem("data")).list
  self.userchoose = userchoose;
  self.changedata = changedata;
  console.log(self.carddata)
  function userchoose(e){
    userDatail();
    localStorage.setItem("userchoose",JSON.stringify(e))
    toastr.success("选择成功")
    console.log(e)
  }

  function userDatail() {
    console.log(13123123)
    $mdDialog.show({
      template: require("./common/userdetial/userdetial.html"),
      controller: userdetialCtrl,
      controllerAs: "ctrl",
      locals: {
        $mdDialog:$mdDialog,
        toastr:toastr
      }
    })
    .then((e) => {
      self.user = JSON.parse(localStorage.getItem("user"));
    });
  }

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



export default paydetailModule;
