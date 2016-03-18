'use strict';

/**
 * @ngdoc directive
 * @name kittensApp.directive:kittenSaysButton
 * @description
 * # kittenSaysButton
 */
angular.module('kittensApp')
  .directive('kittenSaysButton', function () {
    return {
      templateUrl: 'views/kittens/kitten_says_button.html',
      restrict: 'E',
      controllerAs: 'dm',
      controller: function(Kitten, SweetAlert) {
        var dm = this;
        dm.kittenSays = kittenSays;

        function kittenSays() {
          Kitten.customGET('says').then(displayKittenWord, displayError);
        }

        function displayKittenWord(response) {
          SweetAlert.swal(response.message, 'Kitten said', 'success');
        }

        function displayError() {
          SweetAlert.swal('Uh oh', 'Kitten has not spoken...', 'error');
        }
      }
    };
  });
