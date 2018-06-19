import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';
import carousel from'../../../../node_modules/angular-ui-bootstrap/src/carousel';


let aboutModule = angular.module('about', [
    uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about'
    });
})


.controller('aboutCtrl',aboutCtrl)

.component('about', aboutComponent)

.name;



function aboutCtrl($scope,$http, $templateCache) {
  "ngInject";
  var self = this;
  // var timmer = null;
  // var myDate = new Date()
  // self.time;
  $scope.addPoints = function () {
    var seriesArray = $scope.chart.series
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
};

$scope.addSeries = function () {
    var rnd = []
    for (var i = 0; i < 10; i++) {
        rnd.push(Math.floor(Math.random() * 20) + 1)
    }
    $scope.chart.series.push({
        data: rnd
    })
}

$scope.removeRandomSeries = function () {
    var seriesArray = $scope.chart.series
    var rndIdx = Math.floor(Math.random() * seriesArray.length);
    seriesArray.splice(rndIdx, 1)
}

$scope.options = {
    type: 'line'
}

$scope.swapChartType = function () {
    if (this.chart.options.chart.type === 'line') {
        this.chart.options.chart.type = 'bar'
    } else {
        this.chart.options.chart.type = 'line'
    }
}

$scope.chart = {
    options: {
        chart: {
            type: 'bar'
        }
    },
    series: [{
        data: [10, 15, 12, 8, 7]
    }],
    title: {
        text: 'Hello'
    }
}




//
  self.abc = 0;
  self.name = "1";
  self.data = [
               {name:'有福之州' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524650976490&di=379e5e420862e088c1ec47735a3fb453&imgtype=0&src=http%3A%2F%2Fpic.lvmama.com%2Fuploads%2Fpc%2Fplace2%2F2016-07-06%2F0f35a657-50b6-4a09-83e4-32fb3ca2c0f7.jpg'},
               {name:'2',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525073110885&di=04a7eabaae8e33aaadc932012e2dcc6b&imgtype=0&src=http%3A%2F%2Fimg0.ph.126.net%2F8VX3278rJjK5k-Y6RkQFWw%3D%3D%2F1437492706161349311.jpg'},
               {name:'3',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525073188440&di=bc0df43fd64811ffd140c136b0b25b68&imgtype=0&src=http%3A%2F%2Fs2.lvjs.com.cn%2Fuploads%2Fpc%2Fplace2%2F2016-07-16%2F4bf70e34-9034-458a-8d1c-6deb4a922c60.jpg'},
               {name:'4',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525073292572&di=78b1ead2b9ddff1e3548a3feddfb32fa&imgtype=0&src=http%3A%2F%2Fwww.np.gov.cn%2Fcms%2Fpages%2F340347902394030000%2Fimages%2Fb3a11bf65ae3ceb9cc09841a1448c83f.jpg'}
              ];
  // self.addtab = addtab;
  // self.deltab = deltab;

  self.sidebar = [{name: '福州',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525957259&di=e47fc091cebdf0c176f19a810f12c13d&imgtype=jpg&er=1&src=http%3A%2F%2Fs2.lvjs.com.cn%2Fuploads%2Fpc%2Fplace2%2F2016-07-06%2F835d26db-905a-4d45-963b-6985c128ecf5.jpg',main:'福州是中国优秀旅游城市之一，名山、名寺、名园、名居繁多，独具滨江滨海和山水园林旅游城市风貌，尤其是鼓山，人说“到了福州没上鼓山等于没来福州”。 福州历史悠久，风光秀丽、名胜众多。',url:'fuzhou'},
                  {name: '武夷山',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525364511293&di=4f9ad8e6cb45d5e83940339ec4b01367&imgtype=0&src=http%3A%2F%2Fwww.fjsy.org%2Fbbs%2Fdata%2Fattachment%2Fforum%2F201312%2F06%2F133735patixaldt4edakpy.jpg',main:'武夷山位于中国东南部福建省西北的武夷山市。武夷山的自然风光独树一帜，尤其以“丹霞地貌”著称于世。典型的丹霞地貌、萦回环绕的九曲溪、再加上神秘的古闽越族文化。',url:'wuyishan'},
                  {name: '厦门',img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525370435025&di=3e9e188852194c5d566c255d167c4d5e&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2539378096%2C1515595486%26fm%3D214%26gp%3D0.jpg',main:'厦门又名鹭岛，是福建省下辖的一个副省级城市，位于福建东南部，闽南地区。厦门市是中华人民共和国15个副省级城市之一，享有省级经济管理权限并拥有地方立法权。',url:'xiamen'}]
  self.searchtrain = searchtrain;
//   function deltab() {
//     self.data.splice(0,1);
//   };

//   function addtab() {
//     let a = self.data[0]
//     self.data.push(a)
//     console.log(self.data)

//   }

//   function automation(){
//     if( self.data.length == 3){
//         addtab()
//     }

//     if( self.data.length == 4){
//          deltab()
//     }

// }

// function displayTime() {
//   var elt = document.getElementById("clock"); // 通过id= "clock"找到元素
//   var now = new Date(); // 得到当前时间
//   elt.innerHTML = now.toLocaleTimeString(); //让elt来显示它
//   setTimeout(displayTime,1000); //在1秒后再次执行
//  }



// function timer() {
//   let now = new Date();
//   self.time = now
//   setTimeout(() =>{
//     timer();

//    },1000)
// }

// timer()
function searchtrain(start,end){

  $http({
      method: 'POST',
      url: 'http://apis.juhe.cn/train/s2swithprice?start=' + start + '&end=' + end + '&date=' + '&dtype=' + '&key=fd91d74f5cd85b57fe350b83fc2c2d07',

  }).then(function successCallback(response) { /**/
      // this callback will be called asynchronously
      // when the response is available
      response.data

  }, function errorCallback(response) {
    console.log(response,3333)
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      //fd91d74f5cd85b57fe350b83fc2c2d07
  })
}


}


export default aboutModule;
