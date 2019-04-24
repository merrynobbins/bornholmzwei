(function () {
  'use strict';

  angular
    .module('030819frauentag')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('030819frauentag', {
        url: '/archiv-2019/03-08-19-frauentag',
        templateUrl: 'archiv-2019/03-08-19-frauentag/views/03-08-19-frauentag.tpl.html',
        controller: 'C030819frauentagCtrl',
        controllerAs: '030819frauentag'
      });
  }
}());
