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



function aboutCtrl($scope) {
  "ngInject";
  var self = this;
  var timmer = null;
  var myDate = new Date()
  self.time;
  self.abc = 0;
  self.name = "1";
  self.data = [{name:'有福之州' ,img:'1'},
//  self.data = [{name:'有福之州' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524650976490&di=379e5e420862e088c1ec47735a3fb453&imgtype=0&src=http%3A%2F%2Fpic.lvmama.com%2Fuploads%2Fpc%2Fplace2%2F2016-07-06%2F0f35a657-50b6-4a09-83e4-32fb3ca2c0f7.jpg'},
               {name:'2',img:'2'},
               {name:'3',img:'3'}];
  self.addtab = addtab;
  self.deltab = deltab;
  self.dataArray = [
    {
      src: 'https://www.travelexcellence.com/images/movil/La_Paz_Waterfall.jpg'
    },
    {
      src: 'http://www.parasholidays.in/blog/wp-content/uploads/2014/05/holiday-tour-packages-for-usa.jpg'
    },
    {
      src: 'http://clickker.in/wp-content/uploads/2016/03/new-zealand-fy-8-1-Copy.jpg'
    },
    {
      src: 'http://images.kuoni.co.uk/73/indonesia-34834203-1451484722-ImageGalleryLightbox.jpg'
    },
    {
      src: 'http://www.holidaysaga.com/wp-content/uploads/2014/09/Day08-SIN-day-Free-City-View.jpg'
    },
    {
      src: 'http://images.kuoni.co.uk/73/malaysia-21747826-1446726337-ImageGalleryLightbox.jpg'
    },
    {
      src: 'http://www.kimcambodiadriver.com/uploads/images/tours/kim-cambodia-driver-angkor-wat.jpg'
    },
    {
      src: 'https://www.travcoa.com/sites/default/files/styles/flexslider_full/public/tours/images/imperialvietnam-halong-bay-14214576.jpg?itok=O-q1yr5_'
    }
  ];

  self.single = {
    slides: [...Array(6).keys()],
    source: '<ui-carousel slides="ctrl.single.slides" dots="true">\n' +
            '  <carousel-item>\n' +
            '    <h3>{{ item + 1 }}</h3>\n' +
            '  </carousel-item>\n' +
            '</ui-carousel><Paste>'
  };
  function deltab() {
    self.data.splice(0,1);
  };

  function addtab() {
    let a = self.data[0]
    self.data.push(a)
    console.log(self.data)

  }

  function automation(){
    if( self.data.length == 3){
        addtab()
    }

    if( self.data.length == 4){
         deltab()
    }

}

function displayTime() {
  var elt = document.getElementById("clock"); // 通过id= "clock"找到元素
  var now = new Date(); // 得到当前时间
  elt.innerHTML = now.toLocaleTimeString(); //让elt来显示它
  setTimeout(displayTime,1000); //在1秒后再次执行
 }



function timer() {
  let now = new Date();
  self.time = now
  setTimeout(() =>{
    timer();

   },1000)
}

timer()

  // automation()
  // setInterval(() =>{
  //   addtab()
  //   console.log(123123,self.data)
  // }, 2000)

  // setInterval(() =>{
  //   deltab()

  // },3000)
  // automation()
}


export default aboutModule;
