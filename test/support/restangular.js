angular.module('kittensApp')
  .config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('/');
  });
