import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)
.controller('appCtrl',appCtrl)

.name;

function appCtrl(){
  var self =this;
  self.data = {userdata:[ {is_admin_user:true,is_superuser:false,message:{name:"admin",password:"admin",name_is:"管理员"},head:""},
                          {is_admin_user:false,is_superuser:false,message:{name:"user",password:"user",name_is:"游客"},head:""},
                          {is_admin_user:true,is_superuser:true,message:{name:"superadmin",password:"admin",name_is:"房子"},head:""}]
              }
  startData();
  console.log(JSON.stringify(localStorage.getItem("data")))

  function startData(){
    if(localStorage.getItem("data")){
      console.log(123123)
    }else{
      console.log(1123123111111)
      let data = self.data
      localStorage.setItem("data",JSON.stringify(data));
    }

  }
}

export default homeModule;
