'use strict';

describe('Directive: kittenRow', function () {

  // load the directive's module
  beforeEach(module('kittensApp'));
  beforeEach(module('kittensApp.templates'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.resource = {title: 'Testing title'};
    element = angular.element('<kitten-row resource="resource"></kitten-row>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  describe('rendered directive', function () {
    it('should contain title', function () {
      expect(element.text()).toContain('Testing title');
    });
  });
});
