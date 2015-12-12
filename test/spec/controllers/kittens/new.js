'use strict';

describe('Controller: KittensNewCtrl', function () {

  // load the controller's module
  beforeEach(module('kittensApp'));

  var KittensNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KittensNewCtrl = $controller('KittensNewCtrl', {
      $scope: scope
    });
  }));

});
