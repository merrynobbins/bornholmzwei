(function () {
  'use strict';

  angular
    .module('071517kinderfest')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('071517kinderfest', {
        url: '/archiv-2017/07-15-17kinderfest',
        templateUrl: 'archiv-2017/07-15-17kinderfest/views/07-15-17kinderfest.tpl.html',
        controller: 'C071517kinderfestCtrl',
        controllerAs: '071517kinderfest'
      });
  }
}());
