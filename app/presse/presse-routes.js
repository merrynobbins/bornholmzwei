(function () {
  'use strict';

  angular
    .module('presse')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('presse', {
        url: '/presse',
        templateUrl: 'presse/views/presse.tpl.html',
        controller: 'presseCtrl',
        controllerAs: 'presse'
      });
  }
}());
