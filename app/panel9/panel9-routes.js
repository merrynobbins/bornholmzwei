(function () {
  'use strict';

  angular
    .module('panel9')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('panel9', {
        url: '/9',
        templateUrl: 'panel9/views/panel9.tpl.html',
        controller: 'Panel9Ctrl',
        controllerAs: 'panel9'
      });
  }
}());
