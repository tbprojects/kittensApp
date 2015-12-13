'use strict';

/**
 * @ngdoc function
 * @name kittensApp.controller:KittensNewCtrl
 * @description
 * # KittensNewCtrl
 * Controller of the kittensApp
 */
angular.module('kittensApp')
  .controller('KittensNewCtrl', function (Kitten, $location) {
    var vm = this;
    vm.resource = Kitten.new();
    vm.save = save;

    function save() {
      vm.resource.save();
      $location.path('/kittens');
    }
  });
