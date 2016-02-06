(function () {
  'use strict';

  angular
    .module('vorstand')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('vorstand', {
        url: '/vorstand',
        templateUrl: 'vorstand/views/vorstand.tpl.html',
        controller: 'VorstandCtrl',
        controllerAs: 'vorstand'
      });
  }
}());
