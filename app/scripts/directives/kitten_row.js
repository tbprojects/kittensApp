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
      link: function postLink(scope, element, attrs) {

      }
    };
  });
