'use strict';

describe('Controller: KittensIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('kittensApp'));
  beforeEach(module('kittensApp.templates'));

  var KittensIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KittensIndexCtrl = $controller('KittensIndexCtrl', {});
  }));

  describe('fetching collection', function () {
    it('should assign fetched collection', inject(function ($httpBackend) {
      $httpBackend.expect('GET', '/kittens').respond([{}]);
      $httpBackend.flush();
      expect(KittensIndexCtrl.collection.length).toBe(1);
    }));
  });
});
