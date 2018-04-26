import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Fuzhou from './about/fuzhou/fuzhou';
import FuzhouDetial from './about/fuzhou/fuzhouDetail/fuzhouDetail';
import Wuyishan from './about/wuyishan/wuyishan';
import WuyishanDetail from './about/wuyishan/wuyishanDetail/wuyishanDetail';
import Xiamen from './about/xiamen/xiamen';
import XiamenDetail from './about/xiamen/xiamenDetail/xiamenDetail';
import Register from './register/register';
import Pay from './pay/pay';
import Itemtemplate from './itemtemplate/itemtemplate';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Fuzhou,
  FuzhouDetial,
  Wuyishan,
  WuyishanDetail,
  Xiamen,
  XiamenDetail,
  Register,
  Pay,
  Itemtemplate
])

.name;

export default componentModule;
