(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name galerie.controller:GalerieCtrl
   *
   * @description
   *
   */
  angular
    .module('galerie')
    .controller('GalerieCtrl', GalerieCtrl);

  function GalerieCtrl() {
    var vm = this;
    vm.ctrlName = 'GalerieCtrl';
  }
}());
