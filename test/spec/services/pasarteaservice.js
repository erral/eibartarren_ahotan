'use strict';

describe('Service: pasarteaService', function () {

  // load the service's module
  beforeEach(module('ahotanApp'));

  // instantiate service
  var pasarteaService;
  beforeEach(inject(function (_pasarteaService_) {
    pasarteaService = _pasarteaService_;
  }));

  it('should do something', function () {
    expect(!!pasarteaService).toBe(true);
  });

});
