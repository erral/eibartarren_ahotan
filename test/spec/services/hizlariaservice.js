'use strict';

describe('Service: hizlariaService', function () {

  // load the service's module
  beforeEach(module('ahotanApp'));

  // instantiate service
  var hizlariaService;
  beforeEach(inject(function (_hizlariaService_) {
    hizlariaService = _hizlariaService_;
  }));

  it('should do something', function () {
    expect(!!hizlariaService).toBe(true);
  });

});
