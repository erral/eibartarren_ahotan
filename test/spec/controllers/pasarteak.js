'use strict';

describe('Controller: PasarteakCtrl', function () {

  // load the controller's module
  beforeEach(module('ahotanApp'));

  var PasarteakCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PasarteakCtrl = $controller('PasarteakCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
