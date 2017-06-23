(function () {
  'use strict';

  angular
    .module('archiv2017')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('archiv2017', {
        url: '/archiv-2017',
        templateUrl: 'archiv-2017/views/archiv-2017.tpl.html',
        controller: 'Archiv2017Ctrl',
        controllerAs: 'archiv2017'
      });
  }
}());
