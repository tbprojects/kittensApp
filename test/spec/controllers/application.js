'use strict';

describe('Controller: ApplicationCtrl', function () {

  // load the controller's module
  beforeEach(module('kittensApp'));

  var ApplicationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplicationCtrl = $controller('ApplicationCtrl', {
      $scope: scope
    });
  }));

  describe('isActiveLink', function(){
    beforeEach(inject(function($location){
      spyOn($location, 'path').and.returnValue('/kittens');
    }));

    describe('when path equals passed view location', function(){
      it('should return true', function(){
        expect(scope.isActiveLink('/kittens')).toBeTruthy();
      });
    });

    describe('when path does not equal passed view location', function(){
      it('should return false', function(){
        expect(scope.isActiveLink('/kittens/new')).toBeFalsy();
      });
    });
  });
});
