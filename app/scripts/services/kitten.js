'use strict';

/**
 * @ngdoc service
 * @name kittensApp.Kitten
 * @description
 * # Kitten
 * Service in the kittensApp.
 */
angular.module('kittensApp')
  .service('Kitten', function (Restangular, newInstance) {
    Restangular.extendModel('kittens', function (model) {
      model.commentsLabel = function () {
        return model.comments_count + ' comments';
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
