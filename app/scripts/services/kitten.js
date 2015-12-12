'use strict';

/**
 * @ngdoc service
 * @name kittensApp.Kitten
 * @description
 * # Kitten
 * Service in the kittensApp.
 */
angular.module('kittensApp')
  .service('Kitten', function (Restangular) {
    Restangular.extendModel('kittens', function (model) {
      return model;
    });
    return Restangular.all('kittens');
  });
