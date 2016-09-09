(function () {
  'use strict';

  angular
    .module('0903120jahre')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0903120jahre', {
        url: '/archiv-2016/09-03-120jahre',
        templateUrl: 'archiv-2016/09-03-120jahre/views/09-03-120jahre.tpl.html',
        controller: 'C0903120jahreCtrl',
        controllerAs: '0903120jahre'
      });
  }
}());
