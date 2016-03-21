'use strict';

/**
 * @ngdoc factory
 * @name kittensApp.newInstance
 * @description
 * # newInstance
 * Service in the kittensApp.
 */
angular.module('kittensApp')
  .factory('newInstance', function (Restangular) {
    return function (route) {
      return function (params) {
        params = params || {};
        return Restangular.restangularizeElement(null, params, route);
      };
    };
  });
