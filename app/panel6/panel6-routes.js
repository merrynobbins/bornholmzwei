(function () {
  'use strict';

  angular
    .module('panel6')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('panel6', {
        url: '/panel6',
        templateUrl: 'panel6/views/panel6.tpl.html',
        controller: 'Panel6Ctrl',
        controllerAs: 'panel6'
      });
  }
}());
