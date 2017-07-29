(function () {
  'use strict';

  angular
    .module('panel10')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('panel10', {
        url: '/10',
        templateUrl: 'panel10/views/panel10.tpl.html',
        controller: 'Panel10Ctrl',
        controllerAs: 'panel10'
      });
  }
}());
