class FuzhouController {
  constructor() {
    this.name = 'xiamen';
    this.scenery = [
        {name: '林则徐纪念馆' , id : '0' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524118390270&di=69ff0f3368178971788c7e9b91d00062&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F728da9773912b31b903b272e8c18367adab4e166.jpg'},
        {name: '三坊七巷' , id : '1' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524118427188&di=c80a14b2984e40dc4392b8f1e4fa726d&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F100k0800000034ugt3BB1.jpg'},
        {name: '于山风景区', id : '2' ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524118459135&di=460e59f2039c651537e65e127f608e23&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fbmiddle%2F532eba49t7ab05d8ef993%26690'},
        {name: '五一广场', id : '3'},
        {name: '鼓山风景区', id : '4'},
    ]
    }

    addTab(view){
      this.scenery.push({name:view})
    }
  }


export default FuzhouController;
