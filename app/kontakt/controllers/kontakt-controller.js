(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name kontakt.controller:KontaktCtrl
   *
   * @description
   *
   */
  angular
    .module('kontakt')
    .controller('KontaktCtrl', KontaktCtrl);

  function KontaktCtrl() {
    var vm = this;
    vm.ctrlName = 'KontaktCtrl';
  }
}());
