(function () {
  'use strict';

  angular
    .module('0308frauentag')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0308frauentag', {
        url: '/archiv-2019/03-08-frauentag',
        templateUrl: 'archiv-2019/03-08-frauentag/views/03-08-frauentag.tpl.html',
        controller: 'C0308frauentagCtrl',
        controllerAs: '0308frauentag'
      });
  }
}());
