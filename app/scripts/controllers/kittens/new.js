'use strict';

/**
 * @ngdoc function
 * @name kittensApp.controller:KittensNewCtrl
 * @description
 * # KittensNewCtrl
 * Controller of the kittensApp
 */
angular.module('kittensApp')
  .controller('KittensNewCtrl', function (Kitten, $location, $timeout, SweetAlert) {
    var vm = this;
    vm.resource = Kitten.new();
    vm.save = save;

    function save() {
      if (vm.resource.isValid()) {
        vm.resource.save().then(onSaved, onFailure);
      } else {
        onFailure();
      }
    }

    function onSaved() {
      SweetAlert.swal('Good job!', 'Your kitten has been added!', 'success');
      $timeout(redirectToList, 1500);
    }

    function onFailure() {
      SweetAlert.swal('Uh oh', 'Kitten has not been added. Ensure all required fields are filled.', 'error');
    }

    function redirectToList() {
      $location.path('/kittens');
    }
  });
