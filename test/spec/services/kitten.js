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
    beforeEach(inject(function (Restangular) {
      var attributes = {title: 'Grumpy', comments_count: 5, likes: 2};
      model = Restangular.restangularizeElement(null, attributes, 'kittens');
    }));

    describe('commentsLabel', function () {
      describe('when comments count is 0', function () {
        it('should return "no meows yet"', function () {
          model.comments_count = 0;
          expect(model.commentsLabel()).toEqual('no meows yet');
        });
      });

      describe('when comments count is 1', function () {
        it('should return "1 meow"', function () {
          model.comments_count = 1;
          expect(model.commentsLabel()).toEqual('1 meow');
        });
      });

      describe('when comments count is greater then 1', function () {
        it('should return "3 meows"', function () {
          model.comments_count = 3;
          expect(model.commentsLabel()).toEqual('3 meows');
        });
      });
    });

    describe('likesLabel', function () {
      it('should return "2 likes"', function () {
        expect(model.likesLabel()).toEqual('2 likes');
      });
    });
  });
});
