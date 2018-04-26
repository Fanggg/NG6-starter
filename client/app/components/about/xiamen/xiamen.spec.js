import XiamenModule from './xiamen'

describe('Xiamen', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(XiamenModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('Xiamen component should be visible when navigates to /about/xiamen', () => {
      $location.url('/xiamen');
      $rootScope.$digest();
      expect($state.current.component).to.eq('xiamen');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('xiamen', {
        $scope: $rootScope.$new()
      });
    });

    it('has a name property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('name');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<xiamen></xiamen>')(scope);
      scope.$apply();
    });

    it('has name in template', () => {
      expect(template.find('h1').html()).to.eq('xiamen');
    });

  });
});
