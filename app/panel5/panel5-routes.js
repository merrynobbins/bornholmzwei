(function () {
  'use strict';

  angular
    .module('panel5')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('panel5', {
        url: '/panel5',
        templateUrl: 'panel5/views/panel5.tpl.html',
        controller: 'Panel5Ctrl',
        controllerAs: 'panel5'
      });
  }
}());
