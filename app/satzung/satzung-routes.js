(function () {
  'use strict';

  angular
    .module('satzung')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('satzung', {
        url: '/satzung',
        templateUrl: 'satzung/views/satzung.tpl.html',
        controller: 'SatzungCtrl',
        controllerAs: 'satzung'
      });
  }
}());
