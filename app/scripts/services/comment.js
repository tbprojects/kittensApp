'use strict';

/**
 * @ngdoc service
 * @name kittensApp.Comment
 * @description
 * # Comment
 * Service in the commentsApp.
 */
angular.module('kittensApp')
  .factory('Comment', function (Restangular, newInstance) {
    Restangular.extendModel('comments', function (model) {

      return model;
    });
    var service = Restangular.all('comments');
    service.new = newInstance('comments');

    return service;
  });
