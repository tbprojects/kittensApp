'use strict';

describe('Service: newInstance', function () {

  // load the service's module
  beforeEach(module('kittensApp'));

  // instantiate service
  var newMethod,
    model;
  beforeEach(inject(function (newInstance) {
    newMethod = newInstance('kittens');
  }));

  describe('new', function () {
    describe('when object is passed', function () {
      beforeEach(function () {
        model = newMethod({title: 'Cute One'});
      });

      it('should return restangularized element', function () {
        expect(model.restangularized).toBeTruthy();
      });

      it('should have correct route', function () {
        expect(model.route).toEqual('kittens');
      });

      it('should have correct title', function () {
        expect(model.title).toEqual('Cute One');
      });
    });

    describe('when object is not passed', function () {
      beforeEach(function () {
        model = newMethod();
      });

      it('should return restangularized element', function () {
        expect(model.restangularized).toBeTruthy();
      });
    });
  });
});
