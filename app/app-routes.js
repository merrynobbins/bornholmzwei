(function () {
  'use strict';

  angular
    .module('bornholmZwei')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/panel1');
  }
}());
