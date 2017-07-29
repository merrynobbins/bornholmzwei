(function () {
  'use strict';

  angular
    .module('panel8')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('panel8', {
        url: '/panel8',
        templateUrl: 'panel8/views/panel8.tpl.html',
        controller: 'Panel8Ctrl',
        controllerAs: 'panel8'
      });
  }
}());
