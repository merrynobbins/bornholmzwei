(function () {
  'use strict';

  angular
    .module('0224obstbaum')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0224obstbaum', {
        url: '/archiv-2018/02-24-obstbaum',
        templateUrl: 'archiv-2018/02-24-obstbaum/views/02-24-obstbaum.tpl.html',
        controller: 'C0224obstbaumCtrl',
        controllerAs: '0224obstbaum'
      });
  }
}());
