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
.controller('wuyishandetailCtrl',wuyishandetailCtrl)
.component('wuyishanDetail', wuyishanDetailComponent)

.name;

function wuyishandetailCtrl ($state, $stateParams) {
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
          name:'大王峰',
          introduce:'大王峰是进入武夷山的第一峰。峰顶古木参天，南壁悬崖峭壁，只有南壁一条狭小的孔道，可供登临峰巅。这是一条直上直下的裂罅，裂罅越高越窄，有的地方登临者需侧身缩腹，手足并用而过。从观左拾级而上，就是通天台。再往上攀几步，便到了大王峰顶。 若乘坐九曲竹筏漂流经过一曲时，会见大王峰巍然雄踞于溪北，直耸云表，形如天柱，又因其具有王者之尊，故正名为大王峰；又因其隔溪与二曲的玉女峰相对，故衍化出“大王、玉女隔溪相恋”的民间故事。',
          phone:'0599-5131890',pay:'包含在武夷山景区门票之中；/武夷山景区通票/1.一日游门票140元；/2.二日游门票150元；/3.三日游门票160元。',time:'(夏季)6:30-18:00;(冬季)7:00-17:30',
          usetime:'2-3小时',bus:'景区内观光车：在武夷山风景区内，有四路旅游车可穿越景区内的部分景点，其中1路和2路为环保型观光车，分别从赤石主入口和上埔次入口往返于星村次入口之间，而3路和4路支线则是中巴单线车，从赤石主入口往返于星村次入口和新建停车场之间。',
          img:[{tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525364511293&di=4f9ad8e6cb45d5e83940339ec4b01367&imgtype=0&src=http%3A%2F%2Fwww.fjsy.org%2Fbbs%2Fdata%2Fattachment%2Fforum%2F201312%2F06%2F133735patixaldt4edakpy.jpg'},
            {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525959207&di=44ec2030fef0a0894697d21b16d456ce&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.meyet.com%2Fforum%2F201210%2F13%2F174325cczmxc0sv777c7mc.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525959212&di=f1ee0cc8ae4c13fbb6489122d85257e1&imgtype=jpg&er=1&src=http%3A%2F%2Fupload.17u.net%2Fuploadpicbase%2F2012%2F03%2F15%2Faa%2F2012031509360196910.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525364495727&di=bba8a74bb98d990f72f026d8bb2367d8&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Fwugc%2Fp153%2F201208%2F15%2F72197e3e290213ee93835fbb.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525364497937&di=9cc4375ad36442a1144433de1e2071be&imgtype=0&src=http%3A%2F%2Ffile26.mafengwo.net%2FM00%2F68%2F5B%2FwKgB4lOgRTeAH37_ABBE31R9k6M58.jpeg'},]
        },
        {
          name:'武夷宫',
          introduce:'武夷宫是武夷山风景区最古老的道观。现存两口龙井和万年宫、三清殿。万年宫现在是朱熹纪念馆，宫内有两株千年桂树，龙盘蛇曲，被称为“桂花王”。三清殿现在是国际兰亭学院所在地，殿内有四块珍贵的碑刻：忠定神道碑、洞天仙府、明龚一清和现代郭沫若游武夷的诗题。武夷宫景区还包含武夷山博物馆和购物街区。',
          phone:'0599-5134010',pay:'包含在武夷山景区门票之中；/武夷山景区通票/1.一日游门票140元；/2.二日游门票150元；/3.三日游门票160元。',
          usetime:'2小时',bus:'武夷宫位于一曲大王峰下，步行或打的都十分方便。游览时间一般为1-2小时，通常是乘竹筏上岸后到武夷宫景区游览，九曲竹筏漂流与武夷宫正好半日行程。',time:'夏季6:30-18:00，冬季6:30-17:30',
          img:[{tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525959583&di=0d4fd0953f9be9e30c2b2d3e77ff5a26&imgtype=jpg&er=1&src=http%3A%2F%2Fdimg09.c-ctrip.com%2Fimages%2Ftg%2F846%2F222%2F316%2Fc88dcc354cf14343a974c431a158a49d.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525364862667&di=6c639fae24a6709897ba0669e2a80829&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2818072052%2C2657008289%26fm%3D214%26gp%3D0.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525364860049&di=fa63526d7a6568613fd604ba21170f82&imgtype=0&src=http%3A%2F%2Fimg.meyet.com%2Fforum%2F201210%2F15%2F214110j14vzvg92n17gqvv.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525364857098&di=06999f988d43b4a7cf2e1660f70228b8&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3111316546%2C142599482%26fm%3D214%26gp%3D0.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525959641&di=33ddaa79029f2103b897cf9a8de77943&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.itc.cn%2Fphoto%2FoNFunraX49G'},]
        }
        ,
        {
            name:'玉女峰',
            introduce:'武夷山玉女峰位于九曲溪二曲溪南，因其酷似亭亭玉立少女而得名。玉女峰突兀挺拔数十丈。峰顶花卉参簇，恰似山花插鬓；岩壁秀润光洁，宛如玉石雕就，乘坐竹筏从水上望去，俨然是一位秀美绝伦的少女。玉女峰与大王峰隔溪相望，像一对脉脉含情的恋人。东侧的圆石如镜，像玉女梳妆台，壁间“镜台”二字，是武夷山最大的摩崖石刻。',
            phone:'0599-5135110',pay:'包含在武夷山景区门票之中；/武夷山景区通票/1.一日游门票140元；/2.二日游门票150元；/3.三日游门票160元。',
            usetime:'1-2小时',bus:'从武夷山市到武夷山景区有15公里，沿途都有招手即停的旅游专线车，也可选择的士。市区内有湖桃、西门、南门三个汽车站，景区内的车站设在三姑、武夷宫和星村。在武夷宫、玉女峰、九曲宾馆、水帘洞、一线天、星村码头、永乐禅寺和莲花峰等处均设有停车场。',time:'7:30-17:30',
            img:[{tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525365102705&di=a8e88ec40503280ca0e8e93f454e26e3&imgtype=0&src=http%3A%2F%2Fwww.paopaohai.com%2Fimages%2F20120711%2Fimg_url_201207110933021600198229.jpg'},
              {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525365099956&di=d6e587b5357cef2dae4bee3ae6462f2e&imgtype=0&src=http%3A%2F%2Ffile32.mafengwo.net%2FM00%2F2C%2F7F%2FwKgBs1gZZXaAPfuyAAg_jKo2GTA24.jpeg'},
            {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525365095390&di=44d296acdfb520939290b3ff77bb80f0&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D4059430576%2C1327645886%26fm%3D214%26gp%3D0.jpg'},
            {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525365091753&di=f0deb417bc0c5eb167dd5a7a9cb6af04&imgtype=0&src=http%3A%2F%2Fdimg04.c-ctrip.com%2Fimages%2Ffd%2Fvacations%2Fg1%2FM08%2F11%2F30%2FCghzflU3H-eAR9V5ABdUeabDrk8735.jpg'},
            {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525365098345&di=ce8b1ab47ce48790d43f8f553acd9910&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D758183292%2C4076650527%26fm%3D214%26gp%3D0.jpg'},]
        }
        ,
        {
          name:'大红袍景区',
          introduce:'大红袍景区因出产武夷山最著名的大红袍茶而得名，景区的景点之一就是大红袍茶树，它位于岩腰的盆式茶园内，共6株，外砌石堰加以护卫，因而倍显珍贵；岩壁上镌刻“大红袍”三字。盆式茶园下有亭子，称九龙茶室，可以边品名茶边赏佳景。大红袍景区的茶园景观还有九龙窠茶园，茶园碧绿，芬香沁人，景色优美。大红袍景区还有武夷山最大的佛教寺院──天心永乐禅寺，建筑宏伟，楼阁巍峨；此外还有牛栏坑、三花峰等景点。',
          phone:'0599-5134010',pay:'包含在武夷山景区门票之中；/武夷山景区通票/1.一日游门票140元；/2.二日游门票150元；/3.三日游门票160元。',
          usetime:'2-3小时',bus:'在武夷山风景区内，步行即可到达。',time:'夏季6:30-18:00，冬季6:30-17:30',
          img:[{tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525365697775&di=07ad843fac6f32a4ddfb6623720d6f26&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ffd%2Ftg%2Fg2%2FM06%2F28%2F55%2FCghzgFVMFZWABtPFAAv5vWM10dY682.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525365704807&di=61961cf1080605485fbc891824e92c54&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F208%2F444%2F617%2F85c7379be7664846a9cb64aaece1e2e2.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525365707996&di=7c7d31a0804b0fd8b68b1cd77dfa5d65&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3422662581%2C1148177647%26fm%3D214%26gp%3D0.jpg'},
          {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525365708749&di=1d980c5ddc850ce43c67f26a82086c9c&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ffd%2Ftg%2Fg1%2FM08%2F26%2F85%2FCghzflSdBGeANOyzACeNWTrq51Y128.jpg'}]
        }
        ,
        {
            name:'虎啸岩',
            introduce:'虎啸岩怪石崔嵬，流水迂回，是一个独具泉石天趣的佳境。“虎啸”之声，来自岩上的一个巨洞，山风穿过洞口，便发出怒吼，声传空谷，震撼群山。在武夷，一岩而兼有群峰之胜的，唯有虎啸。所以，虎啸岩可说是一处“极目皆图画”的佳境。',
            phone:'0599-5134010',pay:'包含在武夷山景区门票之中；/武夷山景区通票/1.一日游门票140元；/2.二日游门票150元；/3.三日游门票160元。',
            usetime:'1-2小时',bus:'1. 从天游峰路口乘坐前往星村的中巴，行驶5分钟左右到。/2. 曲溪口下筏，往南沿溪前行，约五分钟即可到达。',time:'夏季6:30-18:00，冬季6:30-17:30',
            img:[{tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525366023311&di=085234571f4fe0d15b493b5e8adce7c1&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F772%2F792%2F517%2F4c3e331e1b01423ba4c10fdf55ad82b0.jpg'},
            {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525366018148&di=c44fbdc4befcd3467a60234f81d0b039&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2734976799%2C346300711%26fm%3D214%26gp%3D0.jpg'},
            {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525366013273&di=2bcbed3f63fbb6d6ab7eefdd00e8a703&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D4189773649%2C2951462057%26fm%3D214%26gp%3D0.jpg'},
            {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525960727&di=155ebf69584ee65764e0f5b8e2a45183&imgtype=jpg&er=1&src=http%3A%2F%2Fs2.lvjs.com.cn%2Fuploads%2Fpc%2Fplace2%2F2016-05-16%2F7275316f-ae54-4d3d-895c-14c2a68cdc4a.jpg'},
            {tab:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525366004981&di=edbf9a0b28a2f909ec0276d6d44d8ecf&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D4023517129%2C74444474%26fm%3D214%26gp%3D0.jpg'},]
          }
        ,
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
