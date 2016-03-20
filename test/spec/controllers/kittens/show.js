'use strict';

describe('Controller: KittensShowCtrl', function () {

  // load the controller's module
  beforeEach(module('kittensApp'));
  beforeEach(module('kittensApp.templates'));

  var KittensShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KittensShowCtrl = $controller('KittensShowCtrl', {
      $scope: scope,
      $routeParams: {id: 1}
    });
  }));

  describe('with making requests', function(){
    beforeEach(inject(function($httpBackend){
      $httpBackend.expect('GET', '/kittens/1').respond({title: 'Cute kitten'});
      $httpBackend.expect('GET', '/comments?kitten_id=1').respond([{content: 'nice!'}]);
      $httpBackend.flush();
    }));

    describe('fetching resource', function () {
      it('should assign fetched resource', function () {
        expect(KittensShowCtrl.resource.title).toEqual('Cute kitten');
      });
    });

    describe('fetching comments', function () {
      it('should assign fetched comments', function () {
        expect(KittensShowCtrl.comments[0].content).toBe('nice!');
      });
    });
  });
});
