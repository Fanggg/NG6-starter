
import 'angular-material';
import 'angular-aria';
import 'angular-messages';
import 'angular-animate';
import 'angular-toastr';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
// import Carousel from '../../node_modules/angular-ui-bootstrap/src/carousel';
import 'angular-sanitize-custom';
import 'angular-ui-bootstrap';
import 'angular-touch';
import 'angular-carousel'
import 'normalize.css';
import 'angular-material-data-table';





angular.module('app', [
    'ngAria',
    'ngAnimate',
    'toastr',
    'ngMessages',
    'ngMaterial',
    'ngTouch',
    'angular-carousel',
    'ngSanitize',
    'ui.bootstrap',
    'md.data.table',
    uiRouter,
    Common,
    Components,

  ])
  .config(($locationProvider,toastrConfig) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 1000;
    toastrConfig.positionClass = 'toast-bottom-right';
    toastrConfig.preventDuplicates = false;
    toastrConfig.progressBar = true;
    toastrConfig.tapToDismiss = true;
  })




  .component('app', AppComponent);


