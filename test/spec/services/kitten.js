'use strict';

describe('Service: Kitten', function () {

  // load the service's module
  beforeEach(module('kittensApp'));

  // instantiate service
  var Kitten,
    model;
  beforeEach(inject(function (_Kitten_) {
    Kitten = _Kitten_;
  }));

  window.expectHavingNewMethod('Kitten');

  describe('as Restangular service', function () {
    it('should have getList defined', function () {
      expect(Kitten.getList).toBeDefined();
    });
  });

  describe('model methods', function () {
    beforeEach(function () {
      var attributes = {id: 1, title: 'Grumpy', comments_count: 5, likes: 2};
      model = Kitten.new(attributes);
    });

    describe('commentsLabel', function () {
      it('should return "5 comments"', function () {
        expect(model.commentsLabel()).toEqual('5 comments');
      });
    });

    describe('likesLabel', function () {
      it('should return "2 likes"', function () {
        expect(model.likesLabel()).toEqual('2 likes');
      });
    });

    describe('like', function () {
      it('should make POST request', inject(function ($httpBackend) {
        $httpBackend.expect('POST', '/kittens/1/like');
        model.like();
        $httpBackend.expectPOST('/kittens/1/like');
      }));
    });
  });
});
