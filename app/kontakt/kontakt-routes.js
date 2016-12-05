(function () {
  'use strict';

  angular
    .module('kontakt')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('kontakt', {
        url: '/kontakt',
        templateUrl: 'kontakt/views/kontakt.tpl.html',
        controller: 'KontaktCtrl',
        controllerAs: 'kontakt'
      });
  }
}());
