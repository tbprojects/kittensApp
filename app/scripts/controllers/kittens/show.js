'use strict';

/**
 * @ngdoc function
 * @name kittensApp.controller:KittensShowCtrl
 * @description
 * # KittensShowCtrl
 * Controller of the kittensApp
 */
angular.module('kittensApp')
  .controller('KittensShowCtrl', function (Kitten, Comment, $routeParams) {
    var vm = this;
    vm.resource = {};
    vm.comments = [];

    activate();

    function activate() {
      Kitten.get($routeParams.id).then(assignResource);
      Comment.getList({kitten_id: $routeParams.id}).then(assignComments);
    }

    function assignResource(resource) {
      vm.resource = resource;
    }

    function assignComments(comments) {
      vm.comments = comments;
    }
  });
