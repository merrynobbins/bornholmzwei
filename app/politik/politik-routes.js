(function () {
  'use strict';

  angular
    .module('politik')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('politik', {
        url: '/politik',
        templateUrl: 'politik/views/politik.tpl.html',
        controller: 'PolitikCtrl',
        controllerAs: 'politik'
      });
  }
}());
