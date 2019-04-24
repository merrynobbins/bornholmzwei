(function () {
  'use strict';

  angular
    .module('archiv2019')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('archiv2019', {
        url: '/archiv-2019',
        templateUrl: 'archiv-2019/views/archiv-2019.tpl.html',
        controller: 'Archiv2019Ctrl',
        controllerAs: 'archiv2019'
      });
  }
}());
