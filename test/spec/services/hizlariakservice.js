'use strict';

describe('Service: hizlariakService', function () {

  // load the service's module
  beforeEach(module('ahotanApp'));

  // instantiate service
  var hizlariakService;
  beforeEach(inject(function (_hizlariakService_) {
    hizlariakService = _hizlariakService_;
  }));

  it('should do something', function () {
    expect(!!hizlariakService).toBe(true);
  });

});
