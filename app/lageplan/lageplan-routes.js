(function () {
  'use strict';

  angular
    .module('lageplan')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('lageplan', {
        url: '/lageplan',
        templateUrl: 'lageplan/views/lageplan.tpl.html',
        controller: 'LageplanCtrl',
        controllerAs: 'lageplan'
      });
  }
}());
