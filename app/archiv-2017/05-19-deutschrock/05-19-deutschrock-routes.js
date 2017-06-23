(function () {
  'use strict';

  angular
    .module('0519deutschrock')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0519deutschrock', {
        url: '/archiv-2017/05-19-deutschrock',
        templateUrl: 'archiv-2017/05-19-deutschrock/views/05-19-deutschrock.tpl.html',
        controller: 'C0519deutschrockCtrl',
        controllerAs: '0519deutschrock'
      });
  }
}());
