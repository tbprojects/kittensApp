'use strict';

/**
 * @ngdoc directive
 * @name kittensApp.directive:kittenRow
 * @description
 * # kittenRow
 */
angular.module('kittensApp')
  .directive('kittenRow', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/kittens/kitten_row.html',
      scope: {resource: '='},
      controller: 'KittensRowCtrl',
      controllerAs: 'vm',
      bindToController: true
    };
  });
