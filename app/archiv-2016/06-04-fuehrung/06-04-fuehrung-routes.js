(function () {
  'use strict';

  angular
    .module('0604fuehrung')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0604fuehrung', {
        url: '/archiv-2016/06-04-fuehrung',
        templateUrl: 'archiv-2016/06-04-fuehrung/views/06-04-fuehrung.tpl.html',
        controller: 'C0604fuehrungCtrl',
        controllerAs: '0604fuehrung'
      });
  }
}());
