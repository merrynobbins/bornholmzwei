(function () {
  'use strict';

  angular
    .module('0618rundgang')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0618rundgang', {
        url: '/archiv-2016/06-18-rundgang',
        templateUrl: 'archiv-2016/06-18-rundgang/views/06-18-rundgang.tpl.html',
        controller: 'C0618rundgangCtrl',
        controllerAs: '0618rundgang'
      });
  }
}());
