(function () {
  'use strict';

  angular
    .module('panel1')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('panel1', {
        url: '/1',
        templateUrl: 'panel1/views/panel1.tpl.html',
        controller: 'Panel1Ctrl',
        controllerAs: 'panel1'
      });
  }
}());
