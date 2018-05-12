class FuzhouController {
  constructor() {
    this.name = 'xiamen';
    this.scenery = [
        {name: '厦门大学' , id : '0' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525369645112&di=72a6f5ab384d2de86fd46d86ca1d64dc&imgtype=0&src=http%3A%2F%2Fwww.jomard.com%2Fuploads%2F170306%2F1-1F306161050c2.jpg'},
        {name: '鼓浪屿' , id : '1' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525370435025&di=3e9e188852194c5d566c255d167c4d5e&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2539378096%2C1515595486%26fm%3D214%26gp%3D0.jpg'},
        {name: '中山路步行街', id : '2' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525372455204&di=dc7ab5e5953bfda3dfddd1e79ada8877&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2566617377%2C3768016300%26fm%3D214%26gp%3D0.jpg'},
        {name: '集美大学', id : '3' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525372455204&di=dc7ab5e5953bfda3dfddd1e79ada8877&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2566617377%2C3768016300%26fm%3D214%26gp%3D0.jpg'},
    ]
    this.data = {
      name:'厦门(Xiamen)',
      his:'厦门市（闽南语：廈門市，白话字：Ē-mn̂g-chhī，闽拼：Ê-bbńg-cî，国际音标：/e˨˩ bŋ̍˨˨ ʨʰi˨˨/（厦门话读音），邮政式拼音：Amoy（来自漳州话读音）），别称鹭岛，简称鹭，是中华人民共和国15个副省级城市之一，五个计划单列市之一；是中国最早实行对外开放政策的四个经济特区之一，五个开发开放类国家综合配套改革试验区之一（即“新特区”）；厦门片区纳入中国最早的四个自由贸易试验区之一“中国（福建）自由贸易试验区”，为两岸新兴产业和现代服务业合作示范区、东南国际航运中心、两岸区域性金融服务中心和两岸贸易中心。2016年，厦门市市区建成区334.64平方公里，常住人口401万人。',
      his1:'厦门市是中华人民共和国东南沿海重要的中心城市，现代化国际性港口风景旅游城市，位于台湾海峡西岸中部、福建省东南沿海、闽南金三角的中心，地处北纬24°23～24°54、东经117°53～118°26，隔海与龙海市及中华民国的金门县相望，陆地与南安市、安溪县、长泰县、龙海市接壤[2]。全市通行闽南语厦门话。厦门岛是厦门的主要岛屿，也是厦门经济特区的发祥地，岛上有厦门的商业和政治中心。厦门岛和金门县隔海对望，在两岸敌对期间曾经炮火连绵。广义上的厦门地区，厦门市境域由沿厦门湾的大陆地区（翔安、同安、集美、海沧）和厦门岛（思明、湖里）、鼓浪屿（思明）、大嶝岛（翔安）等岛屿以及厦门湾组成。全市土地面积656.14平方英里，其中厦门本岛土地面积54.48平方英里（含鼓浪屿），海域面积约1,308.89平方英里。港区外岛屿星罗棋布，港区内群山四周环抱，港阔水深，终年不冻，是一个条件优越的海峡性天然良港。当年新加坡总理李光耀到厦门时称厦门为“花园城市”。',
      his2:'厦门市2016年地区生产总值3784.25亿元人民币，增长7.9%，居福建省第3位，高居中国大陆第49位。人均地区生产总值97,282元人民币，城镇居民人均可支配收入46254元人民币，均居福建省第1位。厦门的主要产业包括：交通运输和仓储邮政业，信息传输和信息技术，商贸服务业，会展旅游业，金融业，机械制造，航空维修和电子产品制造。厦门为全世界最大的LED芯片生产封装基地之一，并且拥有全世界最大的大型客车生产基地与全亚洲最大的航空维修基地之一。'
    }
    }

    addTab(view){
      this.scenery.push({name:view})
    }
  }


export default FuzhouController;
