(function () {
  'use strict';

  angular
    .module('bewerbung')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('bewerbung', {
        url: '/bewerbung',
        templateUrl: 'bewerbung/views/bewerbung.tpl.html',
        controller: 'BewerbungCtrl',
        controllerAs: 'bewerbung'
      });
  }
}());
