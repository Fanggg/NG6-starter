import ItemtemplateModule from './itemtemplate';
import ItemtemplateController from './itemtemplate.controller';
import ItemtemplateComponent from './itemtemplate.component';
import ItemtemplateTemplate from './itemtemplate.html';

describe('Itemtemplate', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ItemtemplateModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ItemtemplateController();
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
      expect(ItemtemplateTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ItemtemplateComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ItemtemplateTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ItemtemplateController);
    });
  });
});
