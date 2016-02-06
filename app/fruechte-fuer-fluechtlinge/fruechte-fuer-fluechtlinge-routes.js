(function () {
  'use strict';

  angular
    .module('fruechteFuerFluechtlinge')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('fruechteFuerFluechtlinge', {
        url: '/fruechte-fuer-fluechtlinge',
        templateUrl: 'fruechte-fuer-fluechtlinge/views/fruechte-fuer-fluechtlinge.tpl.html',
        controller: 'FruechteFuerFluechtlingeCtrl',
        controllerAs: 'fruechteFuerFluechtlinge'
      });
  }
}());
