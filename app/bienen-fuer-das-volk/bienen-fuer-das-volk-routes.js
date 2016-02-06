(function () {
  'use strict';

  angular
    .module('bienenFuerDasVolk')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('bienenFuerDasVolk', {
        url: '/bienen-fuer-das-volk',
        templateUrl: 'bienen-fuer-das-volk/views/bienen-fuer-das-volk.tpl.html',
        controller: 'BienenFuerDasVolkCtrl',
        controllerAs: 'bienenFuerDasVolk'
      });
  }
}());
