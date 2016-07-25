'use strict';

/**
 * @ngdoc service
 * @name kittensApp.KittenShareService
 * @description
 * # KittenShareService
 * Factory in the kittensApp.
 */
angular.module('kittensApp')
  .factory('KittenShareService', function ($window) {
    return {toMail: toMail};
    
    function toMail(kitten, recipientEmail) {
      var message = "Checkout this cat! " + kitten.url;
      var url = "mailto:" + recipientEmail+"?body=" + message;
      $window.open(url, "_blank");
    }
  });
