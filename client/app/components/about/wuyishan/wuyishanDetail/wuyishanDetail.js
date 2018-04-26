import angular from 'angular';
import uiRouter from 'angular-ui-router';
import wuyishanDetailComponent from './wuyishanDetail.component';


let wuyishanDetailModule = angular.module('wuyishanDetail', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('wuyishandetail', {
      url: '/wuyishan/scenicArea/{detailId}',
      component: 'wuyishanDetail',
      // resolve: {
      //   person: function(people, $stateParams) {
      //     return $ctrl.people.find(function(person) {
      //       return person.id === $stateParams.personId;
      //     });
      //   }
      // }
    });
})
.controller('detailCtrl',detailCtrl)
.component('wuyishanDetail', wuyishanDetailComponent)

.name;

function detailCtrl ($state, $stateParams) {
  'ngInject';


    var self = this;
    self.data;
     self.scenery = [
        {name: '林则徐纪念馆' },
        {name: '三坊七巷'},
        {name: '于山风景区'},
        {name: '五一广场'},
        {name: '鼓山风景区'},
    ];
    getData()
    console.log(self.data)
    console.log($stateParams)
    console.log(this.scenery,1111)
    function getData(){
     return self.data = self.scenery[$stateParams.detailId]
    }

}

export default wuyishanDetailModule;
