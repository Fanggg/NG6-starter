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
    this.editing = false;
    this.change = false;
    this.userdata = JSON.parse(localStorage.getItem("user"))

  }



  confirm(){
    localStorage.removeItem("user")
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
    let a =  JSON.parse(localStorage.getItem("data"))
    a.list.push(this.list)
    console.log(a.list)
    localStorage.setItem("data",JSON.stringify(a))
    this.toastr.success("添加成功，如需查看请刷新页面")
    this.editing = false;
  }
}
