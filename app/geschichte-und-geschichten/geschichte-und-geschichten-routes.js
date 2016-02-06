(function () {
  'use strict';

  angular
    .module('geschichteUndGeschichten')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('geschichteUndGeschichten', {
        url: '/geschichte-und-geschichten',
        templateUrl: 'geschichte-und-geschichten/views/geschichte-und-geschichten.tpl.html',
        controller: 'GeschichteUndGeschichtenCtrl',
        controllerAs: 'geschichteUndGeschichten'
      });
  }
}());
