'use strict';

/**
 * @ngdoc function
 * @name kittensApp.controller:ApplicationCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the kittensApp
 */
angular.module('kittensApp')
  .controller('ApplicationCtrl', function ($scope, $location) {
    $scope.isActiveLink = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
