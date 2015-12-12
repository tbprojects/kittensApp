'use strict';

/**
 * @ngdoc overview
 * @name kittensApp
 * @description
 * # kittensApp
 *
 * Main module of the application.
 */
angular
  .module('kittensApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/kittens', {
        templateUrl: 'views/kittens/index.html',
        controller: 'KittensIndexCtrl',
        controllerAs: 'kittens/index'
      })
      .when('/kittens/new', {
        templateUrl: 'views/kittens/new.html',
        controller: 'KittensNewCtrl',
        controllerAs: 'kittens/new'
      })
      .otherwise({
        redirectTo: '/kittens'
      });
  });
