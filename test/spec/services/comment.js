'use strict';

describe('Service: Comment', function () {

  // load the service's module
  beforeEach(module('kittensApp'));

  // instantiate service
  var Comment;
  beforeEach(inject(function (_Comment_) {
    Comment = _Comment_;
  }));

  window.expectHavingNewMethod('Comment');

  describe('as Restangular service', function () {
    it('should have getList defined', function () {
      expect(Comment.getList).toBeDefined();
    });
  });
});
