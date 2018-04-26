export class userdetialCtrl{

  name;

  password;

  userdata;


  constructor(
    $mdDialog,
    toastr
  ){
    "ngInject"
    this.$mdDialog = $mdDialog;
    this.toastr = toastr;
    this.type = "password";
    this.userdata = JSON.parse(localStorage.getItem("user"))
    console.log(this.userdata)
  }



  confirm(){
    localStorage.removeItem("user")
    this.toastr.info('已退出登入')
    return this.$mdDialog.hide();
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
}
