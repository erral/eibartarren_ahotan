'use strict';

describe('Service: pasarteakService', function () {

  // load the service's module
  beforeEach(module('ahotanApp'));

  // instantiate service
  var pasarteakService;
  beforeEach(inject(function (_pasarteakService_) {
    pasarteakService = _pasarteakService_;
  }));

  it('should do something', function () {
    expect(!!pasarteakService).toBe(true);
  });

});
