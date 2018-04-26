import PayModule from './pay';
import PayController from './pay.controller';
import PayComponent from './pay.component';
import PayTemplate from './pay.html';

describe('Pay', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PayModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PayController();
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
      expect(PayTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = PayComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PayTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PayController);
    });
  });
});
