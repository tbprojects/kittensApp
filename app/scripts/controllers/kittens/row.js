'use strict';

/**
 * @ngdoc function
 * @name kittensApp.controller:KittensRowCtrl
 * @description
 * # KittensRowCtrl
 * Controller of the kittensApp
 */
angular.module('kittensApp')
  .controller('KittensRowCtrl', function (localStorageService, SweetAlert) {
    var vm = this;
    vm.like = like;
    vm.liked = liked;

    function like() {
      vm.resource.like().then(onSuccess, onFailure);
    }

    function liked() {
      return localStorageService.get(likeStorageKey());
    }

    function onFailure() {
      SweetAlert.swal('Uh oh', 'Could not like this kitten.', 'error');
    }

    function onSuccess() {
      vm.resource.likes++;
      localStorageService.set(likeStorageKey(), true);
    }

    function likeStorageKey() {
      return 'liked-kitten-' + vm.resource.id;
    }
  });
