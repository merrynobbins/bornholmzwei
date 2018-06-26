(function () {
  'use strict';

  angular
    .module('0621fetedlm')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0621fetedlm', {
        url: '/archiv-2018/06-21-fetedlm',
        templateUrl: 'archiv-2018/06-21-fetedlm/views/06-21-fetedlm.tpl.html',
        controller: 'C0621fetedlmCtrl',
        controllerAs: '0621fetedlm'
      });
  }
}());
