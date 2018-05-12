import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registerComponent from './register.component';

let registerModule = angular.module('register', [
  uiRouter
])

.component('register', registerComponent)
.controller('registerCtrl',registerCtrl)
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('register', {
      url: '/register',
      component: 'register'
    });
})
.name;

function registerCtrl(toastr,$state){
  'ngInject';

  var self = this;

  self.name;
  self.name_is;
  self.password;
  self.repetitionExamine = repetitionExamine ;
  self.formatData = formatData ;
  self.verify = verify;
  self.confirm = confirm;

  self.data = JSON.parse(localStorage.getItem("data"))
  console.log(self.data)

  function repetitionExamine(){
    console.log(555,self.name)
    if(self.name){
      if(self.data.userdata.find(a => self.name == a.message.name)){
        toastr.info("账号已存在,请更换账号")
      }else{
        toastr.success("账号不存在,可以创建")
      }

      }else{
        toastr.error("账号未填写,请填写账号")
      }
    }

    function verify(){
      if(self.name){
        if(self.data.userdata.find(a => self.name == a.message.name)){
          toastr.info("账号已存在,请更换账号")
        }else{
        }
        }else{
          toastr.error("账号未填写,请填写账号")
        }
    }

    function confirm(){
      if(self.name && self.name_is && self.password){
        if(self.data.userdata.find(a => self.name == a.message.name)){
          toastr.error("账号已存在,请重新填写")
        }else{
          self.data.userdata.push(self.formatData());
            localStorage.setItem("data",JSON.stringify(self.data));
            toastr.success("创建成功");
            $state.go("home")
        }
      }else{
        toastr.error("信息填写不完全")
      }
    }
  //数据格式化
    function formatData() {
      return {
        is_admin_user:false,
        is_superuser:false,
        message:{
          name:self.name,
          name_is:self.name_is,
          password:self.password,
        },
        head:"http://fangggg.top/Picture/thumbnail/d-1s.jpg"
      }
    }


  }






export default registerModule;
