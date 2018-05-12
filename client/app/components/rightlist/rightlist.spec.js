import RightlistModule from './rightlist';
import RightlistController from './rightlist.controller';
import RightlistComponent from './rightlist.component';
import RightlistTemplate from './rightlist.html';

describe('Rightlist', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RightlistModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RightlistController();
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
      expect(RightlistTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = RightlistComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(RightlistTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(RightlistController);
    });
  });
});
