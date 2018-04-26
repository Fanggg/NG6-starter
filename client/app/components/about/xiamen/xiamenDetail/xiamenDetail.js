import angular from 'angular';
import uiRouter from 'angular-ui-router';
import xiamenDetailComponent from './xiamenDetail.component';


let xiamenDetailModule = angular.module('xiamenDetail', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('xiamendetail', {
      url: '/xiamen/scenicArea/{detailId}',
      component: 'xiamenDetail',
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
.component('xiamenDetail', xiamenDetailComponent)

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

export default xiamenDetailModule;
