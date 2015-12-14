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
      it('should return "5 comments"', function () {
        expect(model.commentsLabel()).toEqual('5 comments');
      });
    });

    describe('likesLabel', function () {
      it('should return "2 likes"', function () {
        expect(model.likesLabel()).toEqual('2 likes');
      });
    });

    describe('isValid', function () {
      it('should return false when title is missing', function () {
        expect(validateModel({title: '', url: 'http', submitted_by: 'john'})).toBeFalsy();
      });

      it('should return false when url is missing', function () {
        expect(validateModel({title: 'cute', url: '', submitted_by: 'john'})).toBeFalsy();
      });

      it('should return false when submitted_by is missing', function () {
        expect(validateModel({title: 'cute', url: 'http', submitted_by: ''})).toBeFalsy();
      });

      it('should return false when url is invalid', function () {
        expect(validateModel({title: 'cute', url: 'lol', submitted_by: 'john'})).toBeFalsy();
      });

      it('should return true when all required fields are filled', function () {
        expect(validateModel({title: 'cute', url: 'http', submitted_by: 'john'})).toBeTruthy();
      });

      function validateModel (params) {
        return Kitten.new(params).isValid();
      }
    });
  });
});
