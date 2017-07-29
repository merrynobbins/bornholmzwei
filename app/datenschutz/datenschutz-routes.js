(function () {
  'use strict';

  angular
    .module('datenschutz')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('datenschutz', {
        url: '/datenschutz',
        templateUrl: 'datenschutz/views/datenschutz.tpl.html',
        controller: 'DatenschutzCtrl',
        controllerAs: 'datenschutz'
      });
  }
}());
