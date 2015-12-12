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

  describe('as Restangular service', function () {
    it('should have getList defined', function () {
      expect(Kitten.getList).toBeDefined();
    });
  });

  describe('model methods', function () {
    beforeEach(inject(function (Restangular) {
      var attributes = {title: 'Grumpy', comments_count: 5, likes: 2};
      model = Restangular.restangularizeElement(null, attributes, 'kittens');
    }));

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
  });
});
