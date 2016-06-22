(function () {
  'use strict';

  angular
    .module('0621musique')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0621musique', {
        url: '/archiv-2016/06-21-musique',
        templateUrl: 'archiv-2016/06-21-musique/views/06-21-musique.tpl.html',
        controller: 'C0621musiqueCtrl',
        controllerAs: '0621musique'
      });
  }
}());
