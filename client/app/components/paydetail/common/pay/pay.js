export class payCtrl{

  name;

  password;




  constructor(
    $mdDialog,
    toastr
  ){
    "ngInject"
    this.type = "1";
    this.$mdDialog = $mdDialog;
    this.toastr = toastr;
    this.finish = true;
    this.paydata = true;
    this.orderlist = []
    this.data = JSON.parse(localStorage.getItem("userInformation"))
    // this.userdata = JSON.parse(localStorage.getItem("user"))
    this.d=new Date()
    this.orderid = String(this.d.getTime())
    this.creattime = JSON.stringify(this.d).split("T")[0].split('"')[1]
  }



  confirm(){
    let order = {
      data:this.data,
      orderid:this.orderid,
      creattime:this.creattime,
      finish:false
    }

    localStorage.setItem("order",JSON.stringify(order))
    this.toastr.success("确认并完成支付成功")
    this.toastr.success("详细信息在用户详情查看")
    this.toastr.success("祝您旅游愉快!")
    this.$mdDialog.cancel();
  }

  changedata(e){
    if(e == "fuzhou"){
      return "福州"
    }
    if(e == "xiamen"){
      return "厦门"
    }
    if(e == "wuyishan"){
      return "武夷山"
    }
  }

  pay(){
    this.toastr.success("付款验证完成，继续操作")
    this.finish = false;
  }



}
