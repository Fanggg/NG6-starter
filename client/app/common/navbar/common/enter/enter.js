export class enterCtrl{

  name;
  password;

  constructor(
    $mdDialog,
    toastr
  ){
    "ngInject"
    this.$mdDialog = $mdDialog;
    this.toastr = toastr;
    this.change = false
    this.type = "password";


  }

  keyup(e){
    var keycode = window.event?e.keyCode:e.which;
    if (keycode == 13) {
      this.confirm()
    }
  }



  confirm(){
    let data =JSON.parse(localStorage.getItem("data"))
    let chosen = data.userdata.find(a => this.name === a.message.name)
    console.log(chosen,1111,this.toastr)
    if(chosen){
      if(chosen.message.password == this.password ){
        localStorage.setItem("user",JSON.stringify(chosen))
        this.toastr.success('登入成功')
       return this.$mdDialog.hide()
      }else{
        console.log('密码输入错误')
        this.toastr.warning('账号或密码错误')
      }
    }else{
      this.toastr.warning('账号不存在')
    }
    console.log(this.name,this.password,data)
  }

  showChange(){
    if(this.type == "password"){
      this.type = "text"
      this.change = true
      console.log(111,this.type)
    }else{
      this.type = "password"
      this.change =false
      console.log(222,this.type)
    }
  }
}
