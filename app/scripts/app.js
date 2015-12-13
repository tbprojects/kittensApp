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
    'ngTouch',
    'restangular',
    'oitozero.ngSweetAlert'
  ])
  .config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/kittens', {
        templateUrl: 'views/kittens/index.html',
        controller: 'KittensIndexCtrl',
        controllerAs: 'vm'
      })
      .when('/kittens/new', {
        templateUrl: 'views/kittens/new.html',
        controller: 'KittensNewCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/kittens'
      });
  });
