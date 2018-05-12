import angular from 'angular';
import uiRouter from 'angular-ui-router';
import fuzhouDetailComponent from './fuzhouDetail.component';


let fuzhouDetailModule = angular.module('fuzhouDetail', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('fuzhoudetail', {
      url: '/fuzhou/scenicArea/{detailId}',
      component: 'fuzhouDetail',
      // resolve: {
      //   person: function(people, $stateParams) {
      //     return $ctrl.people.find(function(person) {
      //       return person.id === $stateParams.personId;
      //     });
      //   }
      // }
    });
})
.controller('fuzhoudetailCtrl',fuzhoudetailCtrl)
.component('fuzhouDetail', fuzhouDetailComponent)

.name;

function fuzhoudetailCtrl ($state, $stateParams) {
  'ngInject';


    var self = this;
  //数据格式
  // {
  //   name:'',
  //   introduce:'',
  //   phone:'',
  //   usetime:'',bus:'',
  //   img:[{tab:''},{tab:''},{tab:''},{tab:''},{tab:''},]
  // }
    self.data;
     self.scenery = [
        {name: '林则徐纪念馆',
          introduce:'林则徐纪念馆在福州市中心的澳门路上，原先是林则徐的祠堂，该祠始建于清光绪三十一年（1905年），内多石刻石像，建筑古朴。馆内有一座正方形碑亭，内立三座青石碑，一为圣旨，一为御赐祭文，一为御赐碑文，均是林则徐卒时皇帝所赐，建祠时补镌。1982年冬这里被辟为林则徐纪念馆，收藏着大量反映鸦片战争历史背景的文物资料。',
          phone:'0591-87568854;0591-87622782',time:'9:00-17:00',
          usetime:'2小时',bus:'乘坐16路、54路、77路、86路、97路、106路、117路、122路、159路、201路、201夜、303路、312路、k3路、观光2号线路公交在乌山路口站下车/',pay:'20元/',
          img:[{tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362014413&di=62a0b4510f0fa536908d816e971a83a5&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F774%2F770%2F547%2Fd705e2ca3ee4424285c5a07360c6bbda.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362313709&di=764a208659aea299d13b84123eed2186&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2722424214%2C2180104756%26fm%3D214%26gp%3D0.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362390521&di=5d6ad7df107eb630ffac7e4c84852a7c&imgtype=0&src=http%3A%2F%2Ffile27.mafengwo.net%2FM00%2F31%2F5E%2FwKgB6lTonTGARyXRAAb1FzNDTA402.jpeg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362393224&di=4062bb8d388dff0e87a164d3963290fa&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D4255118802%2C2692789756%26fm%3D214%26gp%3D0.jpg'},
          {tab:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3434253818,2861273461&fm=27&gp=0.jpg'},]
       },
        {name: '三坊七巷',
        introduce:'三坊七巷起于晋，成于唐五代，至明清鼎盛，古老的坊巷格局至今基本保留完整，是中国都市仅存的一块里坊制度活化石。它由三个坊、七条巷和一条中轴街肆组成，分别是衣锦坊、文儒坊、光禄坊；杨桥巷、郎官巷、塔巷、黄巷、安民巷、宫巷、吉庇巷和南后街，因此自古就被称为“三坊七巷”。 如今的三巷七坊聚集了许多福州的老字号小吃和传统工艺品，好不热闹。',
        phone:'0591-87675791',html:'http://www.sfqx.gov.cn/',usetime:'2-3小时',
        bus:'1. 南后街、杨桥巷（路）：乘坐5、18、22 、27、55、61、66、80、128路到“双抛桥”站下车可到。/2. 光禄坊：乘坐16、18、27、61、109、105路到“省电影公司”（白马路光禄坊口）站下车可到。/3. 吉庇巷（路）、宫巷：乘坐1、K1、8、11、20、66、76、77、80、101、117、121路到“道山路口”站下车可到。/4. 郎官巷、安民巷、黄巷、塔巷：乘坐1、K1、8、11、20、66、76、77、80、101、117、121路到“南街”站下车可到。',
        pay:'1、严复故居、二梅书屋、水榭戏台、小黄楼、林聪彝故居、谢家祠、王麒故居、郭柏荫故居、刘家大院、周哲文艺术馆、鄢家花厅、刘齐衔故居（联票价）：120元 /2、水榭戏台、小黄楼、林聪彝故居：20元 /3、严复故居、刘家大院：15元 /4、王麒故居、郭柏荫故居、鄢家花厅、尤氏民居：10元 /5、谢家祠、刘齐衔故居、周哲文艺术馆（光禄吟台青砖楼）：5元 ',
        time:'全天开放；区域内小景点开放时间8:30-17:00。',
        img:[{tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525957259&di=e47fc091cebdf0c176f19a810f12c13d&imgtype=jpg&er=1&src=http%3A%2F%2Fs2.lvjs.com.cn%2Fuploads%2Fpc%2Fplace2%2F2016-07-06%2F835d26db-905a-4d45-963b-6985c128ecf5.jpg'},
        {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362570857&di=a426fd1cbfefa05ced33f1b27fea285a&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1311%2F02%2Fc8%2F28249760_28249760_1383386545359.jpg'},
        {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525957296&di=d752ee15436f1c069574e95916784598&imgtype=jpg&er=1&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F116%2F985%2F005%2Fb3514bf307064702ac001eac1630842e.jpg'},
        {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362592785&di=a2f40d98f90114b3840b977863e2c74c&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1452261730%2C583775473%26fm%3D214%26gp%3D0.jpg'},
        {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362636239&di=3047b9fbdca495ac4123fdfe92b38a89&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F264%2F090%2F055%2F3d8fade143ae490f8c0ef45f79f2040b.jpg'},]
            },

        {name: '于山风景区',
        introduce:'于山亦是福州地标“三山二塔”之一，位于福州市中心的五一广场附近。相传汉代有何氏九兄弟在此炼丹修仙，故又名曰九仙山，又传因战国时古民族“于越氏”的一支居此而得名。山上有大士殿、定光塔、戚公祠以及摩崖石刻等诸景，其中大士殿还是全国位数不多供奉着男士观音的庙宇之一。于山有九仙观等24景，现存万岁寺、戚公祠、大士殿、定光塔以及自宋至近代的摩崖题刻百余处。碑廊陈列有宋、元、明、清历代碑刻。上山以后即见树木参天，古榕盘根错节，蔚为壮观；俯瞰福州全景，一览无遗。',
        phone:'0591-83355720',usetime:'2小时',pay:'门票免费',time:'8:30-17:00',
        bus:'乘1、2、19、20、51、52、60、64、69、74、76、80、86、106、122、129、130、133、301、303、k1、k3路等公交车在龙华天桥(先施大厦)站下车步行约230米可达',
        img:[{tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362772885&di=b2d519016ce3a936ffda186347a7cc7f&imgtype=0&src=http%3A%2F%2Ffile28.mafengwo.net%2FM00%2FDA%2F19%2FwKgB6lR-V9WAPhxZABIB6aSjAEY30.jpeg'},
        {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525957477&di=31cc25342630cc6a5b46507b4bb33d04&imgtype=jpg&er=1&src=http%3A%2F%2Ffile26.mafengwo.net%2FM00%2F78%2F4F%2FwKgB4lMRx8SAPCzcACIdJZMBHho36.jpeg'},
        {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362760777&di=865d59b98a92665478f4bf576a915a9b&imgtype=0&src=http%3A%2F%2Ffile25.mafengwo.net%2FM00%2F4A%2F80%2FwKgB4lMRkgyAIK8bACjHomZydeY01.jpeg'},
        {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362764270&di=440707ed960bdb9960dcbe3602534af4&imgtype=0&src=http%3A%2F%2Ffile26.mafengwo.net%2FM00%2F49%2F65%2FwKgB4lMRkDOALSpbADLbsr3c1s889.jpeg'},
        {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362913753&di=96e0f1c6d8a8a01bb76571289ebac93b&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D557551799%2C380559218%26fm%3D214%26gp%3D0.jpg'},]
        },
        {name: '五一广场',
        introduce:'五一广场座落在福州市中心于山南麓，占地面积4.5公顷，绿化面积31373平方米。清代时是练兵用的“南教场”，辛亥革命后是群众的体育场，至70年代改建成集会广场后，就一直是榕城中心。五一广场是福州的政治文化中心，市民休闲纳凉活动的重要场所，福州每年的元旦和国庆的升旗仪式都在这里举行。广场具有浓郁的政治文化气息，中间建有音乐喷泉，水池中一组白色雕塑，高5米的8个舞蹈姑娘，寓意“八闽女儿”在八闽大地欢乐生活。',
        phone:'0591-83335930',usetime:'2小时',pay:'免费',time:'全天',
        bus:'乘坐2路, 62路, 64路, 73路, 79路, 103路, 306路, 观光1号线, 观光2号线, 两马航线定时班车路公交在五一广场站下车',
        img:[{tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362987366&di=6a5da7b5322a5f99f10baedb81186b0d&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1681557099%2C125300769%26fm%3D214%26gp%3D0.jpg'}]
            },
        {name: '鼓山风景区',
        introduce:'鼓山诞生在一亿三千五百万年之前，峰顶有一巨石平展如鼓，据说每当风雨来临之时，便隆隆有声，故名鼓山。鼓山位于福州市东郊，在闽江的北岸。自宋朝至今皆为游览胜地，是福建省十佳风景区之一。',
        phone:'0591-83921184',time:'全天开放',pay:'免费',
        usetime:'1天',bus:'乘7、29、36、40、58、69、70、73、97、108、112、115、131、137、162、170、178、302、303、两马航线定时班车等公交在下院站下车步行约900米可达',
        img:[{tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525363268084&di=237a93513ee6ac08d33ab5f396079369&imgtype=0&src=http%3A%2F%2Fimage13-c.poco.cn%2Fmypoco%2Fmyphoto%2F20120927%2F22%2F64781008201209272233182414581295618_001.jpg'},
        {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525363249182&di=826f83eb853b3a83b7ae800c11eefeb0&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D55934265%2C1001372634%26fm%3D214%26gp%3D0.jpg'},
        {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525363257639&di=aa08c05dd08daf78c09044881ba9e68a&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1968454090%2C2927610584%26fm%3D214%26gp%3D0.jpg'},
        {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525363262919&di=5c9c9daceb30f38bab6631d68012aec4&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1101%2F04%2Fc3%2F6449036_6449036_1294121777969.jpg'}]
            },
    ];
    getData();
    console.log(self.data)
    console.log($stateParams.detailId)
    console.log(self.scenery,1111)
    function getData(){
     return self.data = self.scenery[$stateParams.detailId]
    }



}

export default fuzhouDetailModule;
