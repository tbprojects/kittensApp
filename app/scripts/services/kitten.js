'use strict';

/**
 * @ngdoc factory
 * @name kittensApp.Kitten
 * @description
 * # Kitten
 * Service in the kittensApp.
 */
angular.module('kittensApp')
  .factory('Kitten', function (Restangular, newInstance) {
    Restangular.extendModel('kittens', function (model) {
      model.comments_count = model.comments_count || 0;
      model.likes = model.likes || 0;

      model.commentsLabel = function () {
        if (model.comments_count === 0) {
          return 'no meows yet';
        } else if (model.comments_count === 1) {
          return '1 meow';
        } else {
          return model.comments_count + ' meows';
        }
      };

      model.likesLabel = function () {
        return model.likes + ' likes';
      };

      return model;
    });
    var service = Restangular.all('kittens');
    service.new = newInstance('kittens');

    return service;
  });
