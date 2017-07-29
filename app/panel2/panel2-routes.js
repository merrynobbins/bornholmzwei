(function () {
  'use strict';

  angular
    .module('panel2')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('panel2', {
        url: '/2',
        templateUrl: 'panel2/views/panel2.tpl.html',
        controller: 'Panel2Ctrl',
        controllerAs: 'panel2'
      });
  }
}());
