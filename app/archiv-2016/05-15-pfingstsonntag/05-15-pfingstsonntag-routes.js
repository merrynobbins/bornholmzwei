(function () {
  'use strict';

  angular
    .module('0515pfingstsonntag')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0515pfingstsonntag', {
        url: '/archiv-2016/05-15-pfingstsonntag',
        templateUrl: 'archiv-2016/05-15-pfingstsonntag/views/05-15-pfingstsonntag.tpl.html',
        controller: 'C0515pfingstsonntagCtrl',
        controllerAs: '0515pfingstsonntag'
      });
  }
}());
