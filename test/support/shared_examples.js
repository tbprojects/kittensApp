'use strict';

window.expectHavingNewMethod = function(serviceName) {
  var service,
    model;

  describe('new', function () {
    beforeEach(inject([serviceName, function (_service_) {
      service = _service_;
      model = service.new();
    }]));
    it('should return restangularized element', function () {
      expect(model.restangularized).toBeTruthy();
    });

    it('should have correct route', function () {
      expect(model.route).toEqual(service.route);
    });
  });
}
