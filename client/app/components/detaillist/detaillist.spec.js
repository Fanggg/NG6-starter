import DetaillistModule from './detaillist';
import DetaillistController from './detaillist.controller';
import DetaillistComponent from './detaillist.component';
import DetaillistTemplate from './detaillist.html';

describe('Detaillist', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DetaillistModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DetaillistController();
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
      expect(DetaillistTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = DetaillistComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(DetaillistTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(DetaillistController);
    });
  });
});
