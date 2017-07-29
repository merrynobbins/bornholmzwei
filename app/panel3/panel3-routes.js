(function () {
  'use strict';

  angular
    .module('panel3')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('panel3', {
        url: '/panel3',
        templateUrl: 'panel3/views/panel3.tpl.html',
        controller: 'Panel3Ctrl',
        controllerAs: 'panel3'
      });
  }
}());
