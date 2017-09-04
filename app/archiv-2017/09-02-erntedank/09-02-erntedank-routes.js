(function () {
  'use strict';

  angular
    .module('0902erntedank')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0902erntedank', {
        url: '/archiv-2017/09-02-erntedank',
        templateUrl: 'archiv-2017/09-02-erntedank/views/09-02-erntedank.tpl.html',
        controller: 'C0902erntedankCtrl',
        controllerAs: '0902erntedank'
      });
  }
}());
