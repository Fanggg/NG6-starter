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
self.list = [{name:"武夷山双人三日游",url:"wuyishan",pay:532,number:2,day:3,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525364511293&di=4f9ad8e6cb45d5e83940339ec4b01367&imgtype=0&src=http%3A%2F%2Fwww.fjsy.org%2Fbbs%2Fdata%2Fattachment%2Fforum%2F201312%2F06%2F133735patixaldt4edakpy.jpg'},
{name:"厦门单人一日游",url:"xiamen",pay:388,number:1,day:1,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525369645112&di=72a6f5ab384d2de86fd46d86ca1d64dc&imgtype=0&src=http%3A%2F%2Fwww.jomard.com%2Fuploads%2F170306%2F1-1F306161050c2.jpg'},
{name:"福州单人一日游",url:"fuzhou",pay:288,number:1,day:1,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525957259&di=e47fc091cebdf0c176f19a810f12c13d&imgtype=jpg&er=1&src=http%3A%2F%2Fs2.lvjs.com.cn%2Fuploads%2Fpc%2Fplace2%2F2016-07-06%2F835d26db-905a-4d45-963b-6985c128ecf5.jpg'},
{name:"武夷单人二日游",url:"wuyishan",pay:300,number:1,day:2,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525365102705&di=a8e88ec40503280ca0e8e93f454e26e3&imgtype=0&src=http%3A%2F%2Fwww.paopaohai.com%2Fimages%2F20120711%2Fimg_url_201207110933021600198229.jpg'},
{name:"福州双人二日游",url:"fuzhou",pay:400,number:2,day:2,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525957259&di=e47fc091cebdf0c176f19a810f12c13d&imgtype=jpg&er=1&src=http%3A%2F%2Fs2.lvjs.com.cn%2Fuploads%2Fpc%2Fplace2%2F2016-07-06%2F835d26db-905a-4d45-963b-6985c128ecf5.jpg'},
{name:"福州双人一日游",url:"fuzhou",pay:333,number:1,day:1,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525363268084&di=237a93513ee6ac08d33ab5f396079369&imgtype=0&src=http%3A%2F%2Fimage13-c.poco.cn%2Fmypoco%2Fmyphoto%2F20120927%2F22%2F64781008201209272233182414581295618_001.jpg'},
{name:"武夷单人一日游",url:"wuyishan",pay:200,number:1,day:1,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525959583&di=0d4fd0953f9be9e30c2b2d3e77ff5a26&imgtype=jpg&er=1&src=http%3A%2F%2Fdimg09.c-ctrip.com%2Fimages%2Ftg%2F846%2F222%2F316%2Fc88dcc354cf14343a974c431a158a49d.jpg'}]

  self.data = {userdata:[ {is_admin_user:true,is_superuser:false,message:{name:"admin",password:"admin",name_is:"管理员"},head:"http://fangggg.top/Picture/thumbnail/d-2s.jpg"},
                          {is_admin_user:false,is_superuser:false,message:{name:"user",password:"user",name_is:"游客"},head:"http://fangggg.top/Picture/thumbnail/d-1s.jpg"},
                          {is_admin_user:true,is_superuser:true,message:{name:"superadmin",password:"admin",name_is:"房子"},head:"http://fangggg.top/Picture/thumbnail/d-5s.jpg"}],
              list:self.list
              }
  startData();
  pushstates();

  function startData(){
    if(localStorage.getItem("data")){

    }else{

      let data = self.data
      localStorage.setItem("data",JSON.stringify(data));
    }

  }

  function pushstates(){
    let a = 'about'

    localStorage.setItem("mainstates",JSON.stringify(a))
  }
}

export default homeModule;
