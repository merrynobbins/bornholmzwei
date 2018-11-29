(function () {
  'use strict';

  angular
    .module('1006schlacht')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('1006schlacht', {
        url: '/archiv-2018/10-06-schlacht',
        templateUrl: 'archiv-2018/10-06-schlacht/views/10-06-schlacht.tpl.html',
        controller: 'C1006schlachtCtrl',
        controllerAs: '1006schlacht'
      });
  }
}());
