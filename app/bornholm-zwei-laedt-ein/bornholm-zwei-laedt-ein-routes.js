(function () {
  'use strict';

  angular
    .module('bornholmZweiLaedtEin')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('bornholmZweiLaedtEin', {
        url: '/bornholm-zwei-laedt-ein',
        templateUrl: 'bornholm-zwei-laedt-ein/views/bornholm-zwei-laedt-ein.tpl.html',
        controller: 'BornholmZweiLaedtEinCtrl',
        controllerAs: 'bornholmZweiLaedtEin'
      });
  }
}());
