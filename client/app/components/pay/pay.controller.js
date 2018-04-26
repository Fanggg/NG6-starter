class PayController {
  constructor() {
    this.name = 'pay';
    this.user = JSON.parse(localStorage.getItem("user"))

  }
}

export default PayController;
