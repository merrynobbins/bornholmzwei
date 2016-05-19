(function () {
  'use strict';

  angular
    .module('archiv')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('archiv', {
        url: '/archiv',
        templateUrl: 'archiv/views/archiv.tpl.html',
        controller: 'ArchivCtrl',
        controllerAs: 'archiv'
      });
  }
}());
