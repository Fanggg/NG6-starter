import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';
import { enterCtrl } from './common/enter/enter.js';
import { userdetialCtrl } from './common/userdetial/userdetial.js';

let navbarModule = angular.module('navbar', [
  uiRouter
])

.component('navbar', navbarComponent)
.controller('navbarCtrl',navbarCtrl)
.name;


function navbarCtrl($mdDialog,toastr){
  'ngInject';
 var self = this;
 self.user = JSON.parse(localStorage.getItem("user"));
 searchchoose();
 self.name = 'navbar'
 self.enter = enter
 self.userDatail = userDatail
 self.state;
 self.organizations = [
  {
    region: '福建',
    managers: [
      {
        name: '福州',
        url:'fuzhou',
        reports: [
          {name: '林则徐纪念馆' , url:'fuzhoudetail' , id:'0'},
          {name: '三坊七巷' , url:'fuzhoudetail' , id:'1'},
          {name: '于山风景区' , url:'fuzhoudetail' , id:'2'},
          {name: '五一广场' , url:'fuzhoudetail' , id:'3'},
          {name: '鼓山风景区' , url:'fuzhoudetail' , id:'4'},
        ]
      },
      {
        name: '武夷山',
        url: 'wuyishan',
        reports: [
          {name: '大王峰', url:'wuyishandetail' , id:'0'},
          {name: '武夷宫', url:'wuyishandetail' , id:'1'},
          {name: '玉女峰', url:'wuyishandetail' , id:'2'},
          {name: '大红袍景区', url:'wuyishandetail' , id:'3'},
          {name: '虎啸岩', url:'wuyishandetail' , id:'4'}
        ]
      },
      {
        name: '厦门',
        url: 'xiamen',
        reports: [
          {name: '厦门大学', url:'xiamendetail' , id:'0'},
          {name: '鼓浪屿', url:'xiamendetail' , id:'1'},
          {name: '中山路步行街', url:'xiamendetail' , id:'2'},
          {name: '集美大学', url:'xiamendetail' , id:'3'}
        ]
      },
      {
        name: '泉州',
        reports: [
          {name: 'Bob'},
          {name: 'Sandra'},
          {name: 'Juan'}
        ]
      }
    ]
  },
  {
    region: '浙江',
    managers: [
      {
        name: 'Janet',
        reports: [
          {name: 'Betty'},
          {name: 'Corrie'},
          {name: 'Carlos'}
        ]
      },
      {
        name: 'Randy',
        reports: [
          {name: 'Julia'},
          {name: 'Matt'},
          {name: 'Kara'}
        ]
      }
    ]
  },
  {
    region: '四川',
    managers: [
      {
        name: 'Peggy',
        reports: [
          {name: 'Dwight'},
          {name: 'Pam'},
          {name: 'Jeremy'}
        ]
      },
      {
        name: 'Andrew',
        reports: [
          {name: 'Stephen'},
          {name: 'Naomi'},
          {name: 'Erin'}
        ]
      }
    ]
  }
];




//登入弹窗

  function enter() {
    $mdDialog.show({
      template: require("./common/enter/enter.html"),
      controller: enterCtrl,
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

  //用户详情

  function userDatail() {

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

  function searchchoose(){
    let a = localStorage.getItem("mainstates");
    if (a == 'about'){

      self.state = false
      localStorage.removeItem("mainstates")
    }else{

      self.state = true
    }
  }
}
export default navbarModule;
