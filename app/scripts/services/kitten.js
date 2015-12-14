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
        return model.comments_count + ' comments';
      };

      model.likesLabel = function () {
        return model.likes + ' likes';
      };

      model.isValid = function () {
        return !hasMissingValues() && hasValidUrl();
      };

      function hasMissingValues() {
        return (_.isEmpty(model.title) ||
          _.isEmpty(model.url) ||
          _.isEmpty(model.submitted_by));
      }

      function hasValidUrl() {
        return _.startsWith(model.url, 'http');
      }

      return model;
    });
    var service = Restangular.all('kittens');
    service.new = newInstance('kittens');

    return service;
  });
