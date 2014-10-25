'use strict';

describe('Controller: HizlariakCtrl', function () {

  // load the controller's module
  beforeEach(module('ahotanApp'));

  var HizlariakCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HizlariakCtrl = $controller('HizlariakCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
