(function () {
  'use strict';

  angular
    .module('neuigkeiten')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('neuigkeiten', {
        url: '/neuigkeiten',
        templateUrl: 'neuigkeiten/views/neuigkeiten.tpl.html',
        controller: 'NeuigkeitenCtrl',
        controllerAs: 'neuigkeiten'
      });
  }
}());
