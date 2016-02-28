(function () {
  'use strict';

  angular
    .module('galerie')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('galerie', {
        url: '/galerie',
        templateUrl: 'galerie/views/galerie.tpl.html',
        controller: 'GalerieCtrl',
        controllerAs: 'galerie'
      });
  }
}());
