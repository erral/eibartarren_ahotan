'use strict';

describe('Controller: PasarteaCtrl', function () {

  // load the controller's module
  beforeEach(module('ahotanApp'));

  var PasarteaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PasarteaCtrl = $controller('PasarteaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
