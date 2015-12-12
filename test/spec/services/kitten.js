'use strict';

describe('Service: Kitten', function () {

  // load the service's module
  beforeEach(module('kittensApp'));

  // instantiate service
  var Kitten;
  beforeEach(inject(function (_Kitten_) {
    Kitten = _Kitten_;
  }));

  describe('as Restangular service', function () {
    it('should have getList defined', function () {
      expect(Kitten.getList).toBeDefined();
    });
  });
});
