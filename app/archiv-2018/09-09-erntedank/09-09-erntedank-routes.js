(function () {
  'use strict';

  angular
    .module('0909erntedank')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0909erntedank', {
        url: '/archiv-2018/09-09-erntedank',
        templateUrl: 'archiv-2018/09-09-erntedank/views/09-09-erntedank.tpl.html',
        controller: 'C0909erntedankCtrl',
        controllerAs: '0909erntedank'
      });
  }
}());
