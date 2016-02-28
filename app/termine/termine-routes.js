(function () {
  'use strict';

  angular
    .module('termine')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('termine', {
        url: '/termine',
        templateUrl: 'termine/views/termine.tpl.html',
        controller: 'TermineCtrl',
        controllerAs: 'termine'
      });
  }
}());
