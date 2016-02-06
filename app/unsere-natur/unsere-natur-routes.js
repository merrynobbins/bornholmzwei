(function () {
  'use strict';

  angular
    .module('unsereNatur')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('unsereNatur', {
        url: '/unsere-natur',
        templateUrl: 'unsere-natur/views/unsere-natur.tpl.html',
        controller: 'UnsereNaturCtrl',
        controllerAs: 'unsereNatur'
      });
  }
}());
