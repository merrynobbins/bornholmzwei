(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name neuigkeiten.controller:NeuigkeitenCtrl
   *
   * @description
   *
   */
  angular
    .module('neuigkeiten')
    .controller('NeuigkeitenCtrl', NeuigkeitenCtrl);

  function NeuigkeitenCtrl() {
    var vm = this;
    vm.ctrlName = 'NeuigkeitenCtrl';
  }
}());
