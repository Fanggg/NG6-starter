class FuzhouController {
  constructor() {
    this.name = 'wuyishan';
    this.scenery = [
        {name: '大王峰' , id : '0' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525364511293&di=4f9ad8e6cb45d5e83940339ec4b01367&imgtype=0&src=http%3A%2F%2Fwww.fjsy.org%2Fbbs%2Fdata%2Fattachment%2Fforum%2F201312%2F06%2F133735patixaldt4edakpy.jpg'},
        {name: '武夷宫' , id : '1' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525959583&di=0d4fd0953f9be9e30c2b2d3e77ff5a26&imgtype=jpg&er=1&src=http%3A%2F%2Fdimg09.c-ctrip.com%2Fimages%2Ftg%2F846%2F222%2F316%2Fc88dcc354cf14343a974c431a158a49d.jpg'},
        {name: '玉女峰', id : '2' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525365102705&di=a8e88ec40503280ca0e8e93f454e26e3&imgtype=0&src=http%3A%2F%2Fwww.paopaohai.com%2Fimages%2F20120711%2Fimg_url_201207110933021600198229.jpg'},
        {name: '大红袍景区', id : '3' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525365697775&di=07ad843fac6f32a4ddfb6623720d6f26&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ffd%2Ftg%2Fg2%2FM06%2F28%2F55%2FCghzgFVMFZWABtPFAAv5vWM10dY682.jpg'},
        {name: '虎啸岩', id : '4' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525366023311&di=085234571f4fe0d15b493b5e8adce7c1&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F772%2F792%2F517%2F4c3e331e1b01423ba4c10fdf55ad82b0.jpg'},
    ]
    this.data ={
      name:'武夷山(Wuyi mountain)',
      his:'武夷山市（闽北语：Ǔ-ǐ-súing-chī）是中华人民共和国福建省下辖的一个县级市，现由南平市代管，1989年由原崇安县（cǒ̤ng-úing-gṳ̄ing）撤县设市而来，以境内武夷山而得名，是福建省唯一以名山命名的城市。该市位于福建省西北部，与江西省相毗邻，距南平市160千米。全市辖3个镇、4个乡、3个街道和4个农茶场，总面积2800余平方千米。',
      his1:'武夷山风景秀丽，武夷山风景名胜区是国家重点风景名胜区。武夷山古迹众多，古闽越人在武夷山地区留下了武夷山崖墓群、闽越王城遗址等遗迹。宋代朱熹在此授徒讲学，将理学发扬光大，成为一代儒宗。武夷山也是中国古代文人墨客踏足之地，武夷山摩崖石刻即为见证。1998年武夷山市被评为中国首批优秀旅游城市。1999年武夷山被联合国教科文组织列为世界文化与自然双遗产。',
      his2:'武夷山盛产茶叶，武夷岩茶在中国茶业界有较高的知名度，1959年首次被评为中国十大名茶之一。',
    }
    }

    addTab(view){
      this.scenery.push({name:view})
    }
  }


export default FuzhouController;
