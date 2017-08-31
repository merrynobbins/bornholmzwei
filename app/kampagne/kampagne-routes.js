(function () {
  'use strict';

  angular
    .module('kampagne')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('kampagne', {
        url: '/kampagne',
        templateUrl: 'kampagne/views/kampagne.tpl.html',
        controller: 'KampagneCtrl',
        controllerAs: 'kampagne'
      });
  }
}());
