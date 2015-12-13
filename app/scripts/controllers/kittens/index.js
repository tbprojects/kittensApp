'use strict';

/**
 * @ngdoc function
 * @name kittensApp.controller:KittensIndexCtrl
 * @description
 * # KittensIndexCtrl
 * Controller of the kittensApp
 */
angular.module('kittensApp')
  .controller('KittensIndexCtrl', function (Kitten) {
    var vm = this;
    vm.collection = [];

    activate();

    function activate() {
      Kitten.getList().then(assignCollection);
    }

    function assignCollection(collection) {
      vm.collection = _.sortByOrder(collection, ['id'], ['desc']);
    }
  });
