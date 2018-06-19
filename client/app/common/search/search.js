import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SearchComponent from './search.component';

let SearchModule = angular.module('search', [
  uiRouter
])
.controller('searchCtrl', searchCtrl)
.component('search', SearchComponent)
.name;


function searchCtrl ($timeout, $q, $log ,$state,toastr) {
  'ngInject';
  var self = this;
  self.abc;
  self.simulateQuery = true;
  self.isDisabled    = false;

  // list of `state` value/display objects
  self.states        = loadAll();
  self.querySearch   = querySearch;
  self.selectedItemChange = selectedItemChange;
  self.searchTextChange   = searchTextChange;
  self.Keyup = Keyup;

  self.newState = newState;
  self.data = [{name:'福州' ,id:'fuzhou'} ,{name:'fuzhou', id:'fuzhou'},
               {name:'林则徐纪念馆' ,id:'fuzhoudetail', no:0},
               {name:'三坊七巷' ,id:'fuzhoudetail', no:1},
               {name:'于山风景区' ,id:'fuzhoudetail', no:2},
               {name:'五一广场' ,id:'fuzhoudetail', no:3},
               {name:'鼓山风景区' ,id:'fuzhoudetail', no:4},
               {name:'武夷山' ,id:'wuyishan'} ,{name:'wuyishan', id:'wuyishan'},
               {name: '大王峰', id:'wuyishandetail' , no:0},
               {name: '武夷宫', id:'wuyishandetail' , no:1},
               {name: '玉女峰', id:'wuyishandetail' , no:2},
               {name: '大红袍景区', id:'wuyishandetail' , no:3},
               {name: '虎啸岩', id:'wuyishandetail' , no:4},
               {name:'厦门' ,id:'xiamen'} ,{name:'xiamen' ,id:'xiamen'},
               {name: '厦门大学', id:'xiamendetail' , no:0},
               {name: '鼓浪屿', id:'xiamendetail' , no:1},
               {name: '中山路步行街', id:'xiamendetail' , no:2},
               {name: '集美大学', id:'xiamendetail' , no:3}
              ]

  function newState(state) {
    alert("Sorry! You'll need to create a Constitution for " + state + " first!");
  }

  // ******************************
  // Internal methods
  // ******************************

  /**
   * Search for states... use $timeout to simulate
   * remote dataservice call.
   */
  function Keyup(e,a = ""){

    var keycode = window.event?e.keyCode:e.which;
    if(keycode == 13){
      if(self.data.find(r => a == r.name)){
        if(a !="fuzhou" && a !="福州" && a !="厦门" && a !="xiamen" && a !="wuyishan" && a !="武夷山"){
          console.log(111)
          let c = self.data.find(r => a == r.name).id
          let d = self.data.find(r => a == r.name).no
          $state.go(c,({ detailId : d})).then(() =>{
            toastr.success('搜索成功,正在跳转')
          })
        }else{
          let c = self.data.find(r => a == r.name).id
          $state.go(c).then(() => {
          toastr.success('搜索成功,正在跳转')
        })
        }
      }else{
        toastr.warning('暂时没有数据')
      }
    }
  }

  function Click(){

  }
  function querySearch (query) {
    var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
        deferred;
    if (self.simulateQuery) {
      deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }

  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
  }

  function selectedItemChange(item) {
    $log.info('Item changed to ' + JSON.stringify(item));
  }

  /**
   * Build `states` list of key/value pairs
   *
   */
  function loadAll() {
    var allStates = '福州, 武夷山, 厦门, 林则徐纪念馆, 三坊七巷, 于山风景区, 五一广场, 鼓山风景区,\
            大王峰, 武夷宫, 玉女峰, 大红袍景区, 虎啸岩, 鼓浪屿, 厦门大学, 中山路步行街, 集美大学\
           ';

    return allStates.split(/, +/g).map( function (state) {

      return {
        value: state.toLowerCase(),
        display: state
      };
    });
  }

  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);

    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };

  }
};



export default SearchModule;
