(function () {
  'use strict';

  angular
    .module('0521tausch')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0521tausch', {
        url: '/archiv-2017/05-21-tausch',
        templateUrl: 'archiv-2017/05-21-tausch/views/05-21-tausch.tpl.html',
        controller: 'C0521tauschCtrl',
        controllerAs: '0521tausch'
      });
  }
}());
