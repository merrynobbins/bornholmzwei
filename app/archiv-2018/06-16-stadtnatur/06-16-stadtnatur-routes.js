(function () {
  'use strict';

  angular
    .module('0616stadtnatur')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0616stadtnatur', {
        url: '/archiv-2018/06-16-stadtnatur',
        templateUrl: 'archiv-2018/06-16-stadtnatur/views/06-16-stadtnatur.tpl.html',
        controller: 'C0616stadtnaturCtrl',
        controllerAs: '0616stadtnatur'
      });
  }
}());
