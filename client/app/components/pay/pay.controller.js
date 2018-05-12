class PayController {
  constructor($scope) {
    this.name = 'pay';
    this.user = JSON.parse(localStorage.getItem("user"))

  }
}

export default PayController;
