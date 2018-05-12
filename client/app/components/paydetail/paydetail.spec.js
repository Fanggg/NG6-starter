import PaydetailModule from './paydetail';
import PaydetailController from './paydetail.controller';
import PaydetailComponent from './paydetail.component';
import PaydetailTemplate from './paydetail.html';

describe('Paydetail', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PaydetailModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PaydetailController();
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
      expect(PaydetailTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = PaydetailComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PaydetailTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PaydetailController);
    });
  });
});
