'use strict';

describe('Controller: HizlariaCtrl', function () {

  // load the controller's module
  beforeEach(module('ahotanApp'));

  var HizlariaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HizlariaCtrl = $controller('HizlariaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
