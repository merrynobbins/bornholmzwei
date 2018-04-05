(function () {
  'use strict';

  angular
    .module('archiv2018')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('archiv2018', {
        url: '/archiv-2018',
        templateUrl: 'archiv-2018/views/archiv-2018.tpl.html',
        controller: 'Archiv2018Ctrl',
        controllerAs: 'archiv2018'
      });
  }
}());
