(function () {
  'use strict';

  angular
    .module('0510cdu')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0510cdu', {
        url: '/archiv-2019/05-10-cdu',
        templateUrl: 'archiv-2019/05-10-cdu/views/05-10-cdu.tpl.html',
        controller: 'C0510cduCtrl',
        controllerAs: '0510cdu'
      });
  }
}());
