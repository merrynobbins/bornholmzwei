(function () {
  'use strict';

  angular
    .module('0709kinderfest')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0709kinderfest', {
        url: '/archiv-2016/07-09-kinderfest',
        templateUrl: 'archiv-2016/07-09-kinderfest/views/07-09-kinderfest.tpl.html',
        controller: 'C0709kinderfestCtrl',
        controllerAs: '0709kinderfest'
      });
  }
}());
