(function () {
  'use strict';

  angular
    .module('0424gartenwerkstatt')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0424gartenwerkstatt', {
        url: '/archiv-2016/04-24-gartenwerkstatt',
        templateUrl: 'archiv-2016/04-24-gartenwerkstatt/views/04-24-gartenwerkstatt.tpl.html',
        controller: 'C0424gartenwerkstattCtrl',
        controllerAs: '0424gartenwerkstatt'
      });
  }
}());
