import OrderdetailModule from './orderdetail';
import OrderdetailController from './orderdetail.controller';
import OrderdetailComponent from './orderdetail.component';
import OrderdetailTemplate from './orderdetail.html';

describe('Orderdetail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OrderdetailModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OrderdetailController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(OrderdetailTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = OrderdetailComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OrderdetailTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OrderdetailController);
    });
  });
});
