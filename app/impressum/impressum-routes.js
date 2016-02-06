(function () {
  'use strict';

  angular
    .module('impressum')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('impressum', {
        url: '/impressum',
        templateUrl: 'impressum/views/impressum.tpl.html',
        controller: 'ImpressumCtrl',
        controllerAs: 'impressum'
      });
  }
}());
