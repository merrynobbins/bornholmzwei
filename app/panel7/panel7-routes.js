(function () {
  'use strict';

  angular
    .module('panel7')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('panel7', {
        url: '/panel7',
        templateUrl: 'panel7/views/panel7.tpl.html',
        controller: 'Panel7Ctrl',
        controllerAs: 'panel7'
      });
  }
}());
