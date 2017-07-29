(function () {
  'use strict';

  angular
    .module('panel4')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('panel4', {
        url: '/4',
        templateUrl: 'panel4/views/panel4.tpl.html',
        controller: 'Panel4Ctrl',
        controllerAs: 'panel4'
      });
  }
}());
