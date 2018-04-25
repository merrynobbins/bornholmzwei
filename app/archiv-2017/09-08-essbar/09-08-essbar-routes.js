(function () {
  'use strict';

  angular
    .module('0908essbar')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0908essbar', {
        url: '/archiv-2017/09-08-essbar',
        templateUrl: 'archiv-2017/09-08-essbar/views/09-08-essbar.tpl.html',
        controller: 'C0908essbarCtrl',
        controllerAs: '0908essbar'
      });
  }
}());
