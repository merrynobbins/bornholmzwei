(function () {
  'use strict';

  angular
    .module('0630kinderfest18')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0630kinderfest18', {
        url: '/archiv-2018/06-30-kinderfest18',
        templateUrl: 'archiv-2018/06-30-kinderfest18/views/06-30-kinderfest18.tpl.html',
        controller: 'C0630kinderfest18Ctrl',
        controllerAs: '0630kinderfest18'
      });
  }
}());
