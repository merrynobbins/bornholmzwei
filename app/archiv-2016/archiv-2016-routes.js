(function () {
  'use strict';

  angular
    .module('archiv2016')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('archiv2016', {
        url: '/archiv-2016',
        templateUrl: 'archiv-2016/views/archiv-2016.tpl.html',
        controller: 'Archiv2016Ctrl',
        controllerAs: 'archiv2016'
      });
  }
}());
