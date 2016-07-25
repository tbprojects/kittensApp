'use strict';

/**
 * @ngdoc directive
 * @name kittensApp.directive:kittenShare
 * @description
 * # kittenShare
 */
angular.module('kittensApp')
  .directive('kittenShare', function (KittenShareService) {
    return {
      template: '<button type="button" class="btn btn-link" ng-click="vm.share()">' +
      '<i class="glyphicon glyphicon-share"></i>' +
      '</button>',
      restrict: 'E',
      scope: {kitten: '='},
      bindToController: true,
      controllerAs: 'vm',
      controller: function () {
        var vm = this;
        vm.share = share;

        function share() {
          var recipientEmail = prompt('Enter recipient email');
          KittenShareService.toMail(vm.kitten, recipientEmail);
        }
      }
    };
  });
