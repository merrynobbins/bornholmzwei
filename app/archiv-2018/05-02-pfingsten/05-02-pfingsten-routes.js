(function () {
  'use strict';

  angular
    .module('0502pfingsten')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('0502pfingsten', {
        url: '/archiv-2018/05-02-pfingsten',
        templateUrl: 'archiv-2018/05-02-pfingsten/views/05-02-pfingsten.tpl.html',
        controller: 'C0502pfingstenCtrl',
        controllerAs: '0502pfingsten'
      });
  }
}());
