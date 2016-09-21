'use strict';

describe('Controller: KittensRowCtrl', function () {

  // load the controller's module
  beforeEach(module('kittensApp'));
  beforeEach(module('kittensApp.templates'));

  var KittensRowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, Kitten) {
    scope = $rootScope.$new();
    KittensRowCtrl = $controller('KittensRowCtrl', {});
    KittensRowCtrl.resource = Kitten.new({id: 1, likes: 2});
  }));

  describe('like', function () {
    var $httpBackend;

    beforeEach(inject(function (_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    it('should call like on resource', function () {
      spyOn(KittensRowCtrl.resource, 'like').and.callThrough();
      KittensRowCtrl.like();
      expect(KittensRowCtrl.resource.like).toHaveBeenCalled();
    });

    describe('when successful', function () {
      beforeEach(function () {
        $httpBackend.expect('POST', '/kittens/1/like').respond(true);
      });

      it('should save entry in localStorage', inject(function(localStorageService){
        spyOn(localStorageService, 'set').and.returnValue(true);
        KittensRowCtrl.like();
        $httpBackend.flush();
        expect(localStorageService.set).toHaveBeenCalledWith('liked-kitten-1', true);
      }));

      it('should increment likes by 1', function () {
        KittensRowCtrl.like();
        $httpBackend.flush();
        expect(KittensRowCtrl.resource.likes).toEqual(3);
      });
    });

    describe('when failed', function () {
      beforeEach(function () {
        $httpBackend.expect('POST', '/kittens/1/like').respond(400, false);
      });

      it('should display error message', inject(function (SweetAlert) {
        spyOn(SweetAlert, 'swal').and.callThrough();
        KittensRowCtrl.like();
        $httpBackend.flush();
        expect(SweetAlert.swal).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(String), 'error');
      }));
    });
  });

  describe('liked', function () {
    it('should return value based on localStorageService entry', inject(function (localStorageService) {
      spyOn(localStorageService, 'get').and.returnValue(true);
      expect(KittensRowCtrl.liked()).toBeTruthy();
    }));
  });
});
