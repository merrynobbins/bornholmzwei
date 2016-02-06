(function () {
  'use strict';

  angular
    .module('bilder')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('bilder', {
        url: '/bilder',
        templateUrl: 'bilder/views/bilder.tpl.html',
        controller: 'BilderCtrl',
        controllerAs: 'bilder'
      });
  }
}());
