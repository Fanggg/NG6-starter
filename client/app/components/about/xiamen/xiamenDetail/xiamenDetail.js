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
.controller('xiamendetailCtrl',xiamendetailCtrl)
.component('xiamenDetail', xiamenDetailComponent)

.name;

function xiamendetailCtrl ($state, $stateParams) {
  'ngInject';


    // {
  //   name:'',
  //   introduce:'',
  //   phone:'',pay:'',
  //   usetime:'',bus:'',time:'',
  //   img:[{tab:''},{tab:''},{tab:''},{tab:''},{tab:''},]
  // }

    var self = this;
    self.data;
     self.scenery = [
        {
          name:'厦门大学',
          introduce:'厦门大学由爱国华侨领袖陈嘉庚先生创办于1921年，拥山临海，是中国最美校园之一。古朴的闽南侨乡建筑、郁郁葱葱的南国植物和青春洋溢的南强学子，一切都保留着最初的模样，带你重回白衣飘飘的年代。 建南大礼堂和颂恩楼的人文风韵，芙蓉湖和情人谷的旖旎风光，一起来看流星雨的上弦场，还有承载着青春记忆的芙蓉隧道涂鸦墙是最能体现厦大之美的校园角落。',
          phone:'0592-2180000',pay:'免费',
          usetime:'2-5小时',bus:'乘坐1路、15路、21路、45路、751路、841路、959路在【厦大】站下车。向东南方向出发，沿思明南路走80米，即可到达厦大大南校门。费用：由岛内前往，全程1元；由岛外前往，全程2元',time:'周一到周五12:00-14:00（限客1000，南校门700，西校门300），17:00后无人数限制周六日、法定节假日和寒暑假正常对外开放，无人数限制',
          img:[{tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525964275&di=822b2c5a5af60868468fdd40b131877d&imgtype=jpg&er=1&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F409%2F519%2F390%2Ff5137c7e6c504b12821352148af49e20.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525369556668&di=970d453556121ed1e2aa2a099b936735&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1114120606%2C3584307216%26fm%3D214%26gp%3D0.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525369581333&di=fb4377097fd55b369824fa2026edafb9&imgtype=0&src=http%3A%2F%2Fdimg05.c-ctrip.com%2Fimages%2Ftg%2F434%2F861%2F286%2F8f58245276044b6c99d64446e6bc9057.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525369548821&di=2a47205202637ba409bee71811633a55&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F610%2F942%2F517%2F6ff1109f47974dddba4a1f88689ecf7b.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525369645112&di=72a6f5ab384d2de86fd46d86ca1d64dc&imgtype=0&src=http%3A%2F%2Fwww.jomard.com%2Fuploads%2F170306%2F1-1F306161050c2.jpg'},]
        }
        ,
        {
          name:'鼓浪屿',
          introduce:'鼓浪屿上冈峦起伏，碧波、白云、绿树交相辉映，处处给人以整洁幽静的感觉，除却日光岩、菽庄花园、港仔后海滨浴场、郑成功纪念馆等旅游景点，岛上众多的西式别墅建筑，需要你慢慢去发现里面的故事。鼓浪屿景区核心景点通票 100元，含以下五大景点：日光岩景区（包含日光岩、郑成功纪念馆、百鸟园、日光岩到百鸟园的缆车）、菽庄花园、风琴博物馆、皓月园和国际刻字艺术馆。',
          phone:'800-8582365',pay:'在鼓浪屿旅游，消费主要集中在吃和住上。特色小吃大概在人均10—15元之间，一些具有小资情调的热门餐馆人均消费大约在40元左右；住宿方面，房价从百元至千元不等，不过很多旅行者都热衷于这里的小型家庭旅馆，价格多在100—300元之间，经济实惠，还情调满满。',
          usetime:'一天',bus:'总路线：轮渡码头-三丘田码头-沙滩球场、工艺美术学院-鼓浪别墅-菽庄花园-轮渡码头票价：50元/1.路线1：轮渡码头-三丘田码头-沙滩球场、工艺美术学院票价：20元/2.路线2：轮渡码头-三丘田码头-沙滩球场、工艺美术学院票价：20元/3.路线3：轮渡码头-菽庄花园票价：40元',time:'8:00-18:00',
          img:[{tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525370356678&di=d065b4a3842a1fa617f4128bedc10c70&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F614%2F092%2F421%2F41b67d8b62d9400bb967153d148c19f6.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525370354155&di=41a36b203b6df3038f15d1720225f3c7&imgtype=0&src=http%3A%2F%2Fa5.topitme.com%2Fo151%2F1015122807714664ba.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525370368242&di=7ab9b4495dc78a0a7fdd9203224a9bfd&imgtype=0&src=http%3A%2F%2Fdimg02.c-ctrip.com%2Fimages%2Ffd%2Ftg%2Fg3%2FM0B%2F92%2F5A%2FCggYG1Y_WjOAO2amAB8rd5A3DgU920.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525370370274&di=de41d88dc86ec1bc9c1e50d5185dfd06&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ffd%2Ftg%2Fg1%2FM06%2FB5%2FED%2FCghzflSn-4eAGbMaACM4kiLmcHU595.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525370435025&di=3e9e188852194c5d566c255d167c4d5e&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2539378096%2C1515595486%26fm%3D214%26gp%3D0.jpg'},]
         }
        ,
        {name: '中山步行街'},
        {
            name:'集美大学',
            introduce:'集美大学是福建省省属多科性大学。办学始于著名爱国华侨领袖陈嘉庚先生1918年创办的集美师范学校，1994年，在原集美航海学院、厦门水产学院、福建体育学院、集美财经高等专科学校和集美高等师范专科学校等五所高校的基础上合并组建集美大学。',
            phone:'0592-6181301;0592-6180880;0592-6181346',pay:'集美鳌园门票10元/集美鳌园门票10元；/集美归来堂门票— 10元；/陈嘉庚先生故居门票—10元。',
            usetime:'3-4小时',bus:'乘903、921、922、923、935、959路等公交车在集美学村站下车。',time:'陈嘉庚先生故居开放时间为06:00-20:00',
            img:[{tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525372455204&di=dc7ab5e5953bfda3dfddd1e79ada8877&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2566617377%2C3768016300%26fm%3D214%26gp%3D0.jpg'},
            {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525372454738&di=bb28e2c0822f30935fae844d40651304&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ffd%2Ftg%2Fg2%2FM01%2FCD%2F29%2FCghzgFS3dEGANW7fABuaPS6O7Qk061.jpg'},
            {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525372458108&di=0ac17f1f4b705c5d5771adf93ce98ace&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2562024702%2C3112216317%26fm%3D214%26gp%3D0.jpg'},
            {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525967180&di=6c02c92a4360d1ecc24301070268c236&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.lvmama.com%2Fuploads%2Fpc%2Fplace2%2F2015-11-05%2F21120efe-80c8-44d2-ad9a-0b0ddb6a76b6.jpg'},]
          }

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
