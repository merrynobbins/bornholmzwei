(function () {
  'use strict';

  angular
    .module('bornholmLaedtEin')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('bornholmLaedtEin', {
        url: '/bornholm-laedt-ein',
        templateUrl: 'bornholm-laedt-ein/views/bornholm-laedt-ein.tpl.html',
        controller: 'BornholmLaedtEinCtrl',
        controllerAs: 'bornholmLaedtEin'
      });
  }
}());
