'use strict';

/**
 * @ngdoc function
 * @name kittensApp.controller:KittenConfirmDestroyCtrl
 * @description
 * # KittenConfirmDestroyCtrl
 * Controller of the kittensApp
 */
angular.module('kittensApp')
  .controller('KittenConfirmDestroyCtrl', function ($location, $routeParams, Kitten) {
    var vm = this;
    vm.destroy = destroy;
    vm.cancel = cancel;

    function destroy() {
      Kitten.get($routeParams.id).then(_onGetSuccess, _onGetFailure);
    }

    function cancel() {
      $location.path('/');
    }

    function _onGetSuccess(kitten) {
      kitten.remove().then(_onDestroySuccess, _onDestroyFailure);
    }

    function _onDestroySuccess() {
      alert('Kitten destroyed!');
      $location.path('/');
    }

    function _onGetFailure() {
      alert('Could not get a kitten');
    }

    function _onDestroyFailure() {
      alert('Could not destroy a kitten');
    }
  });
