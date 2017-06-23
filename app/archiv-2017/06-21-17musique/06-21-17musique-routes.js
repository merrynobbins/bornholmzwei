(function () {
  'use strict';

  angular
    .module('062117musique')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('062117musique', {
        url: '/archiv-2017/06-21-17musique',
        templateUrl: 'archiv-2017/06-21-17musique/views/06-21-17musique.tpl.html',
        controller: 'C062117musiqueCtrl',
        controllerAs: '062117musique'
      });
  }
}());
