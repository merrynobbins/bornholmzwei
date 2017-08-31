(function () {
  'use strict';

  angular
    .module('fruechteFuerFluechtlinge')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('fruechteFuerFluechtlinge', {
        url: '/archiv-2016/fruechte-fuer-fluechtlinge',
        templateUrl: 'archiv-2016/fruechte-fuer-fluechtlinge/views/fruechte-fuer-fluechtlinge.tpl.html',
        controller: 'FruechteFuerFluechtlingeCtrl',
        controllerAs: 'fruechteFuerFluechtlinge'
      });
  }
}());
