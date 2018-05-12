class FuzhouController {
  constructor() {
    this.name = 'fuzhou';
    this.scenery = [
        {name: '林则徐纪念馆' , id : '0' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362014413&di=62a0b4510f0fa536908d816e971a83a5&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F774%2F770%2F547%2Fd705e2ca3ee4424285c5a07360c6bbda.jpg'},
        {name: '三坊七巷' , id : '1' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525957259&di=e47fc091cebdf0c176f19a810f12c13d&imgtype=jpg&er=1&src=http%3A%2F%2Fs2.lvjs.com.cn%2Fuploads%2Fpc%2Fplace2%2F2016-07-06%2F835d26db-905a-4d45-963b-6985c128ecf5.jpg'},
        {name: '于山风景区', id : '2' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362772885&di=b2d519016ce3a936ffda186347a7cc7f&imgtype=0&src=http%3A%2F%2Ffile28.mafengwo.net%2FM00%2FDA%2F19%2FwKgB6lR-V9WAPhxZABIB6aSjAEY30.jpeg'},
        {name: '五一广场', id : '3' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525362987366&di=6a5da7b5322a5f99f10baedb81186b0d&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1681557099%2C125300769%26fm%3D214%26gp%3D0.jpg'},
        {name: '鼓山风景区', id : '4' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525363268084&di=237a93513ee6ac08d33ab5f396079369&imgtype=0&src=http%3A%2F%2Fimage13-c.poco.cn%2Fmypoco%2Fmyphoto%2F20120927%2F22%2F64781008201209272233182414581295618_001.jpg'},
    ]
    this.data = {
      name:'福州(Fuzhou)',
      his:'福州市（闽东语：福州市，平话字：Hók-ciŭ-chê，实际读音：/huʔ˨˩ tsiu˥˧ tsʰei˨˦˨/（福州话读音）），别称榕城、三山、左海、闽都，简称榕，是中华人民共和国福建省的省会，位于福建省东部的闽江下游及沿海地区，是福建省的政治、文化、交通中心，海峡西岸经济区中心城市，海上丝绸之路起点城市之一。当地居民以汉族的福州族群为主，母语为闽东语福州话。福州建城于公元前202年，迄今2,200多年，是中国国家历史文化名城，在历史上长期作为福建的政治中心，既是中国东南沿海重要的贸易港口和海上丝绸之路的门户，同时也是重要的文化中心，是中国东南沿海重要都市、东部战区陆军机关驻地、新一线城市。福州地貌属典型的河口盆地，盆地四周被群山峻岭所环抱，其海拔多在600~1,000米之间。',
      his1:'福州是首批14个对外开放的沿海港口城市之一，海上丝绸之路门户以及中国（福建）自由贸易试验区三片区之一；福州也是近代中国最早开放的五个通商口岸之一，福州马尾是中国近代海军的摇篮，中国船政文化的发祥地；曾获“中国优秀旅游城市”、“国家历史文化名城”、“全国文明城市”、“国家森林城市”等称号。',
      his2:'自宋代起福州的文化教育就非常发达，是当时产生进士、状元和两院院士最多的中国城市之一。在近现代史上，福州是中国最早开放通商的五个城市之一，也是中国近代海军的摇篮和工业、科技发源地之一[3]。这里的习俗、文化、传统艺术、建筑形式都自成风格，具有强烈的地域特征。福州还是300多万海外华人的祖籍地，为福建一大侨乡。',

    }
    }

    addTab(view){
      this.scenery.push({name:view})
    }
  }


export default FuzhouController;
