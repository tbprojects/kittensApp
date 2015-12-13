'use strict';

/**
 * @ngdoc service
 * @name kittensApp.newInstance
 * @description
 * # newInstance
 * Service in the kittensApp.
 */
angular.module('kittensApp')
  .service('newInstance', function (Restangular) {
    return function (route) {
      return function (params) {
        params = params || {};
        return Restangular.restangularizeElement(null, params, route);
      };
    };
  });
