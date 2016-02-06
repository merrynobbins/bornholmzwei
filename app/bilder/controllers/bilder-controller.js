(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name bilder.controller:BilderCtrl
   *
   * @description
   *
   */
  angular
    .module('bilder')
    .controller('BilderCtrl', BilderCtrl);

  function BilderCtrl() {
    var vm = this;
    vm.ctrlName = 'BilderCtrl';
  }
}());
