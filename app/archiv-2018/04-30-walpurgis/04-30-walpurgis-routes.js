(function () {
  'use strict';

  angular
    .module('0430walpurgis')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0430walpurgis', {
        url: '/archiv-2018/04-30-walpurgis',
        templateUrl: 'archiv-2018/04-30-walpurgis/views/04-30-walpurgis.tpl.html',
        controller: 'C0430walpurgisCtrl',
        controllerAs: '0430walpurgis'
      });
  }
}());
