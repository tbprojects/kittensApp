'use strict';

/**
 * @ngdoc function
 * @name kittensApp.controller:KittensIndexCtrl
 * @description
 * # KittensIndexCtrl
 * Controller of the kittensApp
 */
angular.module('kittensApp')
  .controller('KittensIndexCtrl', function ($scope, Kitten) {
    $scope.collection = [];
    Kitten.getList().then(assignCollection);

    function assignCollection(collection) {
      $scope.collection = collection;
    }
  });
