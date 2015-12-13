'use strict';

describe('Controller: KittensNewCtrl', function () {

  // load the controller's module
  beforeEach(module('kittensApp'));

  var KittensNewCtrl,
    $httpBackend,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    KittensNewCtrl = $controller('KittensNewCtrl', {});
  }));

  describe('save', function () {
    beforeEach(inject(function (Kitten) {
      var attributes = {
        title: 'New kitten!',
        url: 'http://example.com/kitten.jpg',
        submitted_by: 'John'
      };
      KittensNewCtrl.resource = Kitten.new(attributes);
      $httpBackend.expect('POST', '/kittens').respond(attributes);

    }));

    it('should make POST request', function () {
      KittensNewCtrl.save();
      $httpBackend.expectPOST('/kittens');
    });

    it('should display success message', inject(function (SweetAlert) {
      spyOn(SweetAlert, 'swal').and.callThrough();
      KittensNewCtrl.save();
      $httpBackend.flush();
      expect(SweetAlert.swal).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(String), 'success');
    }));

    it('should redirect back to the list', inject(function ($location, $timeout) {
      spyOn($location, 'path').and.callThrough();
      KittensNewCtrl.save();
      $httpBackend.flush();
      $timeout.flush();
      expect($location.path).toHaveBeenCalledWith('/kittens');
    }));
  });
});
