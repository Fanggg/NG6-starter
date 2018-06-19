export class userdetialCtrl{

  name;

  password;

  userdata;


  constructor(
    $mdDialog,
    toastr,
    $state
  ){
    "ngInject"
    this.$mdDialog = $mdDialog;
    this.toastr = toastr;
    this.$state = $state;
    this.type = "password";
    this.editing = false;
    this.change = false;
    this.modifier = false;
    this.orderhaha = false;
    this.userdata = JSON.parse(localStorage.getItem("user"))
    this.list = JSON.parse(localStorage.getItem("data")).list
    this.lists;
    this.orderlistsuper = JSON.parse(localStorage.getItem("orderlist"))
    console.log(this.list)
  }



  confirm(){
    let order = JSON.parse(localStorage.getItem("order"))

    if(order != null){
      let orderlist = JSON.parse(localStorage.getItem("orderlist"))
      if(orderlist == null){
        let orderlist =[]
        orderlist.push(order)
        localStorage.setItem("orderlist",JSON.stringify(orderlist))
      }else{
        orderlist.push(order)
        localStorage.setItem("orderlist",JSON.stringify(orderlist))
      }


    }
    localStorage.removeItem("user")
    localStorage.removeItem("order")
    this.toastr.info('已退出登入')
    return this.$mdDialog.hide();
  }

  showChange(){
    if(this.type == "password"){
      this.type = "text"
      this.change = true;

    }else{
      this.type = "password"
      this.change = false;

    }
  }

  addlist(){
    if(this.lists){
      let a =  JSON.parse(localStorage.getItem("data"))
      a.list.push(this.lists)
      console.log(a.list)
      localStorage.setItem("data",JSON.stringify(a))
      this.toastr.success("添加成功，如需查看请刷新页面")
      this.editing = false;
    }else{
      this.toastr.warning("请完整填写数据")
    }

  }

  orderlist(){
    let dataList = JSON.parse(localStorage.getItem("order"))
    console.log(dataList)
    if(dataList){
      this.toastr.success("查到您的订单,正在跳转")
      this.$mdDialog.cancel();
      this.$state.go("rightlist")

    }else{
      this.toastr.warning("未查到订单数据")
    }
  }

  delitem(a){
    console.log(a)
    let b = JSON.parse(localStorage.getItem("data"))
    let c = b.userdata
    this.list.forEach((e,index) =>{
      if( e == a ){
        this.list.splice( index, 1 );
        let b = {
          userdata:c,
          list:this.list
        }
        localStorage.setItem("data",JSON.stringify(b))
        this.toastr.success("删除成功，请刷新后查看页面")
        console.log(b.list,111)
      }
      console.log(e,index)
    })
    console.log(this.list)
  }

  editopen(a,b){
    console.log(a,b)
    this.modifier = !this.modifier;
    this.editdata =  a
    this.judge = a
  }
  formatData(){
    return {
      name:this.editdata.name,
      pay:this.editdata.pay,
      number:this.editdata.number,
      day:this.editdata.day,
      img:this.editdata.img,
      url:this.editdata.url
    }
  }
  edit(){
    let a = JSON.parse(localStorage.getItem("data"))
    let c = a.userdata
    this.list.forEach((e,index) =>{
      if( e == this.judge ){
        this.list.splice( index, 1 ,this.formatData());
        let b = {
          userdata:c,
          list:this.list
        }
        localStorage.setItem("data",JSON.stringify(b))
        this.toastr.success("修改成功，请刷新后查看页面")
        this.modifier = !this.modifier;

    // localStorage.setItem("data",JSON.stringify(a))
        console.log(this.list)
      }
    })
  }

  states(e){
    if(e == false){
      return "未采购"
    }

    if(e == true){
      return "已完成"
    }
  }

  haha(e){


    let a = JSON.parse(localStorage.getItem("orderlist"))
    let c = {
      creattime:e.creattime,
      data:e.data,
      finish:true,
      orderid:e.orderid
    }
    console.log(c,a,e)
    a.forEach((d,index) =>{

      if(d.orderid == e.orderid){
        a.splice( index, 1 ,c)
        localStorage.setItem("orderlist",JSON.stringify(a))
        e.finish = true;
        this.toastr.success("审核成功")
        this.toastr.success("发货成功")
      }

    })

  }
}
