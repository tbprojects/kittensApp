'use strict';

describe('Controller: KittensIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('kittensApp'));

  var KittensIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KittensIndexCtrl = $controller('KittensIndexCtrl', {
      $scope: scope
    });
  }));

});