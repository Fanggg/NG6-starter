import { payCtrl } from '../pay/pay'


export class userdetialCtrl{

  name;

  password;




  constructor(
    $mdDialog,
    toastr
  ){
    "ngInject"
    this.$mdDialog = $mdDialog;
    this.toastr = toastr;
    this.inDate = new Date();
    this.outDate = this.inDate
    this.type = "password";
    // this.userdata = JSON.parse(localStorage.getItem("user"))
    console.log(this.userdata)
  }



  confirm(){
    this.senddata()
  }

  //数据传输
  senddata(){
    let user= JSON.parse(localStorage.getItem("user"))
    if(user){
    let list = JSON.parse(localStorage.getItem("userchoose"))
    let in_date = JSON.stringify(this.inDate).split("T")[0].split('"')[1]
    let userInformation = {
      name_is:this.userdata.message.name_is,
      phone:this.userdata.message.phone,
      idcard:this.userdata.message.idcard,
      intime:in_date,
      chooselist:list,
      user:user
    }
    console.log(this.userdata,in_date)
    if(userInformation.name_is && userInformation.phone && userInformation.idcard){
      if(userInformation.phone.length == 11){
        if(userInformation.idcard.length == 18){
          localStorage.setItem('userInformation',JSON.stringify(userInformation))
          this.toastr.success('已确认用户信息，转至付款页');
          setTimeout(() => {
            this.payDatail()
          }, 3000);
        }else{
          this.toastr.error("请输入正确的身份证号码")
        }
      }else{
        this.toastr.error("请输入正确的手机号码");
      }

    }else{
      this.toastr.error("请正确完善信息");

    }

  }else{
    this.toastr.error("请先登入账号")
  }

  }
  showChange(){
    if(this.type == "password"){
      this.type = "text"
      console.log(111,this.type)
    }else{
      this.type = "password"
      console.log(222,this.type)
    }
  }


  payDatail() {
    console.log(13123123)
    this.$mdDialog.show({
      template: require("../pay/pay.html"),
      controller: payCtrl,
      controllerAs: "ctrl",
      locals: {
        $mdDialog:this.$mdDialog,
        toastr:this.toastr
      }
    })
    .then((e) => {
      self.user = JSON.parse(localStorage.getItem("user"));
    });
  }
}
